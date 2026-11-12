import MDXComponents from '@theme-original/MDXComponents';
import Screenshot from '@site/src/components/Screenshot';
import Steps, {Step} from '@site/src/components/Guide/Steps';
import {BeforeYouStart, DoneWhen, InShort, Intro} from '@site/src/components/Guide/Cards';
import OpenInApp from '@site/src/components/Guide/OpenInApp';

/** Components every doc can use without an import. See DESIGN.md. */
export default {
  ...MDXComponents,
  Screenshot,
  Steps,
  Step,
  Intro,
  InShort,
  BeforeYouStart,
  DoneWhen,
  OpenInApp,
};
