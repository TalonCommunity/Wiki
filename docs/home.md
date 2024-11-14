# Home

:::docofeedback

ronzulu: I don't think that everyone would automatically know that there was useful information only accessible
through the Talon icon.

Therefore I think that there should be I link to that page
from a named menu item such as home.

As that page contains links to the main areas of the wiki there is no need for a separate quick start menu heading.

As an example, see
https://docusaurus.io/

:::

:::docotodo

Make the `home` item on the main menu point to the landing page

:::


```
src\pages\index.jsx

import React from 'react'
import { Redirect } from '@docusaurus/router'

export default function HomeRedirect() {
  return <Redirect to="/home" />;
};
```
