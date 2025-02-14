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

import readme from '../../../../../backpack-react-native/packages/react-native-bpk-component-flat-list/README.md';
import iosScreenshotDefault from '../../../../../backpack-react-native/packages/react-native-bpk-component-flat-list/screenshots/ios/default.png';
import androidScreenshotDefault from '../../../../../backpack-react-native/packages/react-native-bpk-component-flat-list/screenshots/android/default.png';
import iosScreenshotWithImages from '../../../../../backpack-react-native/packages/react-native-bpk-component-flat-list/screenshots/ios/with-images.png';
import androidScreenshotWithImages from '../../../../../backpack-react-native/packages/react-native-bpk-component-flat-list/screenshots/android/with-images.png';
import IntroBlurb from '../../components/IntroBlurb';
import DocsPageBuilder from '../../components/DocsPageBuilder';
import DocsPageWrapper from '../../components/DocsPageWrapper';

const components = [
  {
    id: 'default',
    title: 'Default',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotDefault}`,
        altText: 'iOS Default Flat List Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDefault}`,
        altText: 'Android Default Flat List Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'with-images',
    title: 'With images',
    blurb: 'List items can also contain images.',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotWithImages}`,
        altText: 'iOS Flat List Component With Images',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotWithImages}`,
        altText: 'Android Flat List Component With Images',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const blurb = [
  <IntroBlurb>
    The flat list component can be used to display content in the form of a
    tappable list.
  </IntroBlurb>,
];

const NativeFlatListSubPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Flat list"
    components={components}
    readme={readme}
    showMenu
    {...rest}
  />
);

const NativeFlatListPage = () => (
  <DocsPageWrapper
    title="Flat list"
    blurb={blurb}
    nativeSubpage={<NativeFlatListSubPage wrapped />}
  />
);

export default NativeFlatListPage;
