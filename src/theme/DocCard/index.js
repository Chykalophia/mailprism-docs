/**
 * Swizzled DocCard — removes the generic 📄 / 🗃️ emoji that the default theme
 * stamps on every generated-index card, and restyles the cards to match the
 * MailPrism design system. External links get a ↗, internal a → that slides on
 * hover. Kept as plain JS (like the upstream component) to avoid pulling in the
 * theme-classic TS project. See DESIGN.md.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  useDocById,
  findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client';
import {usePluralForm} from '@docusaurus/theme-common';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function useCategoryItemsPlural() {
  const {selectMessage} = usePluralForm();
  return (count) =>
    selectMessage(
      count,
      translate(
        {
          message: '1 item|{count} items',
          id: 'theme.docs.DocCard.categoryDescription.plurals',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        {count},
      ),
    );
}

function CardContainer({className, href, children}) {
  return (
    <Link href={href} className={clsx('card', styles.cardContainer, className)}>
      {children}
    </Link>
  );
}

function CardLayout({className, href, title, description, external}) {
  return (
    <CardContainer href={href} className={className}>
      <Heading as="h2" className={styles.cardTitle} title={title}>
        <span className={styles.cardTitleText}>{title}</span>
        <span className={styles.cardArrow} aria-hidden="true">
          {external ? '↗' : '→'}
        </span>
      </Heading>
      {description && (
        <p className={styles.cardDescription} title={description}>
          {description}
        </p>
      )}
    </CardContainer>
  );
}

function CardCategory({item}) {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useCategoryItemsPlural();
  if (!href) {
    return null;
  }
  return (
    <CardLayout
      className={item.className}
      href={href}
      title={item.label}
      description={item.description ?? categoryItemsPlural(item.items.length)}
    />
  );
}

function CardLink({item}) {
  const doc = useDocById(item.docId ?? undefined);
  const external = !isInternalUrl(item.href);
  return (
    <CardLayout
      className={item.className}
      href={item.href}
      title={item.label}
      description={item.description ?? doc?.description}
      external={external}
    />
  );
}

export default function DocCard({item}) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
