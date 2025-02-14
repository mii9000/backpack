/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';

import readme from '../../../../../backpack-react-native/packages/react-native-bpk-component-picker/README.md';
import iosScreenshotDefault from '../../../../../backpack-react-native/packages/react-native-bpk-component-picker/screenshots/ios/default.png';
import androidScreenshotDefault from '../../../../../backpack-react-native/packages/react-native-bpk-component-picker/screenshots/android/default.png';
import IntroBlurb from '../../components/IntroBlurb';
import DocsPageBuilder from '../../components/DocsPageBuilder';
import DocsPageWrapper from '../../components/DocsPageWrapper';

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb:
      'Picker trigger elements which display the currently selected value and can be tapped to present the actual picker.',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotDefault}`,
        altText: 'iOS Default Nudger Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDefault}`,
        altText: 'Android Default Nudger Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const blurb = [
  <IntroBlurb>
    Pickers let the user pick a single option from a limited list of possible
    options in a modal context.
  </IntroBlurb>,
];

const NativePickerSubPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Picker"
    components={components}
    readme={readme}
    showMenu
    {...rest}
  />
);

const NativePickerPage = () => (
  <DocsPageWrapper
    title="Picker"
    blurb={blurb}
    nativeSubpage={<NativePickerSubPage wrapped />}
  />
);

export default NativePickerPage;
