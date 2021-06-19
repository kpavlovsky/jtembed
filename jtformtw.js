function jtForm() {
    var wrapper = document.getElementById('jtform-wrapper');

    if (!wrapper) {
        console.warn('jtform-wrapper not found');
        return
    }
    var data = JSON.parse(wrapper.dataset.data);
    var holder = document.createElement('div');
    let fullPageClasses = "";
    if (data.fullPage) {
        fullPageClasses = "min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8";
    }
    let backLink = '';
    if (data.displayBacklink) {
        backLink =`<div class="text-center mt-2 text-gray-900 text-sm">
                Made with <a href="https://www.jobtable.com/" target="_blank" rel="noopener">Jobtable.com</a>
            </div>`;
    }
    holder.innerHTML = `
   <style>/*! tailwindcss v2.1.4 | MIT License | https://tailwindcss.com */

/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

/*
Document
========
*/

/**
Use a better box model (opinionated).
*/

#jtform-wrapper *, #jtform-wrapper ::before, #jtform-wrapper ::after {
  box-sizing: border-box;
}

/**
Use a more readable tab size (opinionated).
*/

#jtform-wrapper .html {
  -moz-tab-size: 4;
  -o-tab-size: 4;
     tab-size: 4;
}

/**
1. Correct the line height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
*/

#jtform-wrapper .html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/*
Sections
========
*/

/**
Remove the margin in all browsers.
*/

#jtform-wrapper .body {
  margin: 0;
}

/**
Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
*/

#jtform-wrapper .body {
  font-family:
\t\tsystem-ui,
\t\t-apple-system, /* Firefox supports this but not yet \`system-ui\` */
\t\t'Segoe UI',
\t\tRoboto,
\t\tHelvetica,
\t\tArial,
\t\tsans-serif,
\t\t'Apple Color Emoji',
\t\t'Segoe UI Emoji';
}

/*
Grouping content
================
*/

/**
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
*/

/*
Text-level semantics
====================
*/

/**
Add the correct text decoration in Chrome, Edge, and Safari.
*/

/**
Add the correct font weight in Edge and Safari.
*/

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

/**
Add the correct font size in all browsers.
*/

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

/*
Tabular data
============
*/

/**
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/

/*
Forms
=====
*/

/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/

#jtform-wrapper button, #jtform-wrapper input {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
Remove the inheritance of text transform in Edge and Firefox.
1. Remove the inheritance of text transform in Firefox.
*/

#jtform-wrapper button { /* 1 */
  text-transform: none;
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/

#jtform-wrapper button, #jtform-wrapper [type='button'], #jtform-wrapper [type='submit'] {
  -webkit-appearance: button;
}

/**
Remove the inner border and padding in Firefox.
*/

/**
Restore the focus styles unset by the previous rule.
*/

/**
Remove the additional ':invalid' styles in Firefox.
See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
*/

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

/*
Interactive
===========
*/

/*
Add the correct display in Chrome and Safari.
*/

/**
 * Manually forked from SUIT CSS Base: https://github.com/suitcss/base
 * A thin layer on top of normalize.css that provides a starting point more
 * suitable for web applications.
 */

/**
 * Removes the default spacing and border for appropriate elements.
 */

#jtform-wrapper h2, #jtform-wrapper h3, #jtform-wrapper p {
  margin: 0;
}

#jtform-wrapper button {
  background-color: transparent;
  background-image: none;
}

/**
 * Work around a Firefox/IE bug where the transparent \`button\` background
 * results in a loss of the default \`button\` focus styles.
 */

#jtform-wrapper button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

/**
 * Tailwind custom reset styles
 */

/**
 * 1. Use the user's configured \`sans\` font-family (with Tailwind's default
 *    sans-serif font stack as a fallback) as a sane default.
 * 2. Use Tailwind's default "normal" line-height so the user isn't forced
 *    to override it to ensure consistency even when using the default theme.
 */

#jtform-wrapper .html {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */
  line-height: 1.5; /* 2 */
}

/**
 * Inherit font-family and line-height from \`html\` so users can set them as
 * a class directly on the \`html\` element.
 */

#jtform-wrapper .body {
  font-family: inherit;
  line-height: inherit;
}

/**
 * 1. Prevent padding and border from affecting element width.
 *
 *    We used to set this in the html element and inherit from
 *    the parent element for everything else. This caused issues
 *    in shadow-dom-enhanced elements like <details> where the content
 *    is wrapped by a div with box-sizing set to \`content-box\`.
 *
 *    https://github.com/mozdevs/cssremedy/issues/4
 *
 *
 * 2. Allow adding a border to an element by just adding a border-width.
 *
 *    By default, the way the browser specifies that an element should have no
 *    border is by setting it's border-style to \`none\` in the user-agent
 *    stylesheet.
 *
 *    In order to easily add borders to elements by just setting the \`border-width\`
 *    property, we change the default border-style for all elements to \`solid\`, and
 *    use border-width to hide them instead. This way our \`border\` utilities only
 *    need to set the \`border-width\` property instead of the entire \`border\`
 *    shorthand, making our border utilities much more straightforward to compose.
 *
 *    https://github.com/tailwindcss/tailwindcss/pull/116
 */

#jtform-wrapper *, #jtform-wrapper ::before, #jtform-wrapper ::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

/*
 * Ensure horizontal rules are visible by default
 */

/**
 * Undo the \`border-style: none\` reset that Normalize applies to images so that
 * our \`border-{width}\` utilities have the expected effect.
 *
 * The Normalize reset is unnecessary for us since we default the border-width
 * to 0 on all elements.
 *
 * https://github.com/tailwindcss/tailwindcss/issues/362
 */

#jtform-wrapper input::-moz-placeholder {
  opacity: 1;
  color: #9ca3af;
}

#jtform-wrapper input:-ms-input-placeholder {
  opacity: 1;
  color: #9ca3af;
}

#jtform-wrapper input::placeholder {
  opacity: 1;
  color: #9ca3af;
}

#jtform-wrapper button {
  cursor: pointer;
}

#jtform-wrapper h2, #jtform-wrapper h3 {
  font-size: inherit;
  font-weight: inherit;
}

/**
 * Reset links to optimize for opt-in styling instead of
 * opt-out.
 */

#jtform-wrapper a {
  color: inherit;
  text-decoration: inherit;
}

/**
 * Reset form element properties that are easy to forget to
 * style explicitly so you don't inadvertently introduce
 * styles that deviate from your design system. These styles
 * supplement a partial reset that is already applied by
 * normalize.css.
 */

#jtform-wrapper button, #jtform-wrapper input {
  padding: 0;
  line-height: inherit;
  color: inherit;
}

/**
 * Use the configured 'mono' font family for elements that
 * are expected to be rendered with a monospace font, falling
 * back to the system monospace stack if there is no configured
 * 'mono' font family.
 */

/**
 * Make replaced elements \`display: block\` by default as that's
 * the behavior you want almost all of the time. Inspired by
 * CSS Remedy, with \`svg\` added as well.
 *
 * https://github.com/mozdevs/cssremedy/issues/14
 */

#jtform-wrapper svg {
  display: block;
  vertical-align: middle;
}

/**
 * Constrain images and videos to the parent width and preserve
 * their intrinsic aspect ratio.
 *
 * https://github.com/mozdevs/cssremedy/issues/14
 */

#jtform-wrapper .space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}

#jtform-wrapper .appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

#jtform-wrapper .bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}

#jtform-wrapper .bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
}

#jtform-wrapper .bg-yellow-50 {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 251, 235, var(--tw-bg-opacity));
}

#jtform-wrapper .bg-green-50 {
  --tw-bg-opacity: 1;
  background-color: rgba(236, 253, 245, var(--tw-bg-opacity));
}

#jtform-wrapper .bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgba(79, 70, 229, var(--tw-bg-opacity));
}

#jtform-wrapper .hover\\:bg-indigo-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(67, 56, 202, var(--tw-bg-opacity));
}

#jtform-wrapper .border-transparent {
  border-color: transparent;
}

#jtform-wrapper .border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--tw-border-opacity));
}

#jtform-wrapper .focus\\:border-indigo-500:focus {
  --tw-border-opacity: 1;
  border-color: rgba(99, 102, 241, var(--tw-border-opacity));
}

#jtform-wrapper .rounded-md {
  border-radius: 0.375rem;
}

#jtform-wrapper .border {
  border-width: 1px;
}

#jtform-wrapper .block {
  display: block;
}

#jtform-wrapper .flex {
  display: flex;
}

#jtform-wrapper .hidden {
  display: none;
}

#jtform-wrapper .flex-col {
  flex-direction: column;
}

#jtform-wrapper .justify-center {
  justify-content: center;
}

#jtform-wrapper .flex-shrink-0 {
  flex-shrink: 0;
}

#jtform-wrapper .font-medium {
  font-weight: 500;
}

#jtform-wrapper .font-extrabold {
  font-weight: 800;
}

#jtform-wrapper .h-5 {
  height: 1.25rem;
}

#jtform-wrapper .text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

#jtform-wrapper .text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

#jtform-wrapper .mt-1 {
  margin-top: 0.25rem;
}

#jtform-wrapper .mt-2 {
  margin-top: 0.5rem;
}

#jtform-wrapper .ml-3 {
  margin-left: 0.75rem;
}

#jtform-wrapper .mb-4 {
  margin-bottom: 1rem;
}

#jtform-wrapper .mt-6 {
  margin-top: 1.5rem;
}

#jtform-wrapper .mt-8 {
  margin-top: 2rem;
}

#jtform-wrapper .min-h-screen {
  min-height: 100vh;
}

#jtform-wrapper .disabled\\:opacity-50:disabled {
  opacity: 0.5;
}

#jtform-wrapper .focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

#jtform-wrapper .p-4 {
  padding: 1rem;
}

#jtform-wrapper .py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

#jtform-wrapper .px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

#jtform-wrapper .px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

#jtform-wrapper .py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

#jtform-wrapper .py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

#jtform-wrapper .placeholder-gray-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgba(156, 163, 175, var(--tw-placeholder-opacity));
}

#jtform-wrapper .placeholder-gray-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgba(156, 163, 175, var(--tw-placeholder-opacity));
}

#jtform-wrapper .placeholder-gray-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgba(156, 163, 175, var(--tw-placeholder-opacity));
}

#jtform-wrapper * {
  --tw-shadow: 0 0 #0000;
}

#jtform-wrapper .shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

#jtform-wrapper .shadow {
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

#jtform-wrapper * {
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
}

#jtform-wrapper .focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

#jtform-wrapper .focus\\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}

#jtform-wrapper .focus\\:ring-indigo-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(99, 102, 241, var(--tw-ring-opacity));
}

#jtform-wrapper .text-center {
  text-align: center;
}

#jtform-wrapper .text-white {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}

#jtform-wrapper .text-gray-700 {
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
}

#jtform-wrapper .text-gray-900 {
  --tw-text-opacity: 1;
  color: rgba(17, 24, 39, var(--tw-text-opacity));
}

#jtform-wrapper .text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgba(251, 191, 36, var(--tw-text-opacity));
}

#jtform-wrapper .text-yellow-700 {
  --tw-text-opacity: 1;
  color: rgba(180, 83, 9, var(--tw-text-opacity));
}

#jtform-wrapper .text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgba(146, 64, 14, var(--tw-text-opacity));
}

#jtform-wrapper .text-green-400 {
  --tw-text-opacity: 1;
  color: rgba(52, 211, 153, var(--tw-text-opacity));
}

#jtform-wrapper .text-green-800 {
  --tw-text-opacity: 1;
  color: rgba(6, 95, 70, var(--tw-text-opacity));
}

#jtform-wrapper .w-5 {
  width: 1.25rem;
}

#jtform-wrapper .w-full {
  width: 100%;
}

@-webkit-keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

@-webkit-keyframes pulse {
  50% {
    opacity: .5;
  }
}

@keyframes pulse {
  50% {
    opacity: .5;
  }
}

@-webkit-keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);
            animation-timing-function: cubic-bezier(0.8,0,1,1);
  }

  50% {
    transform: none;
    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);
            animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);
            animation-timing-function: cubic-bezier(0.8,0,1,1);
  }

  50% {
    transform: none;
    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);
            animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
}

#jtform-wrapper * {
  font-family: system-ui,
    -apple-system, /* Firefox supports this but not yet \`system-ui\` */ 'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji';
}

@media (min-width: 640px) {
  #jtform-wrapper .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  #jtform-wrapper .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  #jtform-wrapper .sm\\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  #jtform-wrapper .sm\\:max-w-md {
    max-width: 28rem;
  }

  #jtform-wrapper .sm\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  #jtform-wrapper .sm\\:px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  #jtform-wrapper .sm\\:w-full {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  #jtform-wrapper .lg\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}</style>
    <div class="${fullPageClasses}">
    <div class="mt-8 mb-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div class="rounded-md bg-yellow-50 p-4 hidden jt-error">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <!-- Heroicon name: solid/exclamation -->
                        <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                             fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div class="ml-3">
                        <h3 class="text-sm font-medium text-yellow-800">
                            There was an error submitting the request
                        </h3>
                        <div class="mt-2 text-sm text-yellow-700">
                            <p>
                                Please try again in few minutes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="rounded-md bg-green-50 p-4 hidden jt-success">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <!-- Heroicon name: solid/check-circle -->
                        <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                             fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div class="ml-3">
                        <h3 class="text-sm font-medium text-green-800">
                            Request has been sent
                        </h3>

                    </div>
                </div>
            </div>
            
            <form class="space-y-6" method="post" action="${data.actionUrl}">
                <div>
                    <label for="jtNameInput" class="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <div class="mt-1">
                        <input id="jtNameInput" name="name" type="text" autocomplete="name" required
                               class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                </div>

                <div>
                    <label for="jtEmailInput" class="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div class="mt-1">
                        <input id="jtEmailInput" name="email" type="email" autocomplete="email" required
                               class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                </div>

                <div>
                    <label for="jtPhoneInput" class="block text-sm font-medium text-gray-700">
                        Phone
                    </label>
                    <div class="mt-1">
                        <input id="jtPhoneInput" name="phone" type="tel" autocomplete="tel" required
                               class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                </div>

                <div>
                    <label for="jtAddressInput" class="block text-sm font-medium text-gray-700">
                        Property Address
                    </label>
                    <div class="mt-1">
                        <input id="jtAddressInput" name="property_street_address" type="text"
                               autocomplete="street-address" required
                               class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                </div>
                <div>
                    <label for="jtCityInput" class="block text-sm font-medium text-gray-700">
                        City
                    </label>
                    <div class="mt-1">
                        <input id="jtCityInput" name="property_city" type="text" autocomplete="address-level2" required
                               class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                </div>


                <div>
                    <button type="submit"
                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
                        Submit Request
                    </button>
                </div>
            </form>

        </div>
            ${backLink}
    </div>
    </div>
    `;
    var form = holder.querySelector('form');
    form.addEventListener('submit', function (event) {
        form.querySelector('button').setAttribute('disabled', 'disabled');
        event.preventDefault();
        console.log(event.target);
        console.log(Object.fromEntries(new FormData(event.target)));
        fetch(form.action, {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        }).then(function (data) {
            document.querySelector('#jtform-wrapper').querySelector('.jt-success').classList.remove('hidden');
            document.querySelector('#jtform-wrapper').querySelector('.jt-error').classList.add('hidden');

            form.classList.add('hidden');
            console.log(data);
        }).catch(function (error) {
            document.querySelector('#jtform-wrapper').querySelector('.jt-success').classList.add('hidden');
            document.querySelector('#jtform-wrapper').querySelector('.jt-error').classList.remove('hidden');
            form.querySelector('button').removeAttribute('disabled');
            console.warn(error);
        });

    });
    wrapper.append(holder);
    console.log('jtForm loaded');
}

jtForm();
