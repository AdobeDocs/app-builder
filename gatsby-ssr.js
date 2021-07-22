import React from 'react'
import {withPrefix} from 'gatsby';

export const onRenderBody = ({setHeadComponents}) => {
  setHeadComponents([
    <script src={withPrefix('/redirects.js')}></script>
  ])
};