## I4G OPEN-SOURCE FRONTEND PROJECT 2022 🔥

<img src="./images/I4G-OPENSOURCE-IMAGE.jpg">

## Contributing to the project

Please make sure to read the relevant section before making your contributions, it will make it a lot easier for maintainers to make the most of it and smooth out the experience for everyone involved. 🚀

**Table of Contents**

- [Introduction](#introduction)
- [Intended Audience](#intended-audience)
- [How to contribute](#how-to-contribute)
- [Issues](#working-with-issues)
- [Project Structure](#project-structure)
- [Style Guide](#style-guide)
- [Submitting Changes](#submit-changes)
- [Communication](#communication)
- [Code of Conduct](#code-of-conduct)
- [Licensing](#licensing)


## Introduction

HacktoberFest is back again!. Much appreciation for your desire to participate in the I4G OpenSource. Frontend project. See the [table of content](#contributing-to-the-project) for different ways to help and details about how this project handles them!📝


## Intended audience
- Project contributors
- Frontend Web developers
- UI/UX Designers
- Issue reporters
- Improvement reporters


## How to contribute

- You need a [GitHub](https://www.github.com) account
- You need a local "fork" of this Github repo.
- Clone the repository to your local machine.
- Submit an [issue](https://github.com/Ingressive-for-Good/I4G-OPENSOURCE-FRONTEND-PROJECT-2022/issues) ticket if there is none yet.


## Working with Issues

Click `issues` in the repository to see the reported issues.


## Submitting an Issue

- Describe the issue and include steps to reproduce it if it is a bug.
- If you are able and want to fix this, fork the repository on GitHub
- **See [Issue Template](./issue_template.md) for a formatted way of submmiting an issue.**


## Project Structure

This project follows the Atomic Design Principles. This principle has to be adhered to if your pull request is to be merged.

The structure below explains the atomic design principle.
**NOTE: before creating any new compnent, please check if it exists already to avoid duplicate components.**

In the root directory is an **src** folder which contains the following sub-folders;

- **assets:** add all images and icons here.

- **components:** this folder houses the **atoms** and **molecules** subfolders.

    **atoms:** this sub-folder should house the smallest possible components, such as buttons, titles, inputs, text.

    **molecules:** in this sub-folder resides components that are composed of two or more atoms, for example, a search Box comprising of an HTML TextInput and a     Button.

- **template:** this folder houses layouts. It is basically a skeletal structure of what the page would look like without the components of the page.

- **pages:** here, it all finally comes together. This is where all components come together to show what the UI looks like with real representative content in place.

**Before creating any new component, check all appropriate folders to see if the same component exists already. Avoid creation of duplicate components.**

## Style Guide

**NOTE: Tailwind CSS is the only accepted framework to be used if you are to have your PR merged.**

**There's no need to create your own style configuration, most of the style guides are alredy defined in the tailwind.config.cjs file.**

[Style Guide](./style_guide.md)

**See the complete style guide on [figma](https://www.figma.com/file/cK9hICwy4Tcs7Nw2mXh0Aj/I4G-Open-Source)**

## Submit Changes

- Please avoid working directly on the exisiting branches.
- In your forked repository, create a branch for your upcoming patch. (e.g. feature--autoplay or bugfix--ios-crash)
- Make sure you stick to the coding style that is used already.
- Check for unnecessary whitespace with `git diff --check` before committing.
- Assure nothing is broken by running all the tests.
- Push your changes to the your branch in your forked repository.
- Open a pull request to the original repository and choose the right original branch you want to patch. 
- If not done in commit messages (which you really should do) please make reference and update your issue with the code changes. But please do not close the issue yourself.
- Do NOT commit to other contributor's codebase/issue without their consent.
- You can modify previous solutions if you feel like your solution has better Time or Space complexity.
- Even if you have write access to the repository, do not directly push or merge pull-requests. Let another team member review your pull request and approve.

**Important notes before pushing codes:**
- Always make sure your forked repository is in sync with the Ingressive-for-Good develop branch by clicking Sync fork and updating branch.
- On your local machine do a git pull to your feature branch for a local update.
- If any merge conflicts occurs locally, make a fix and drop a merge commit message on conflicts fixed to help maintainers know what changes were made while making sure your change works.
- With all these done you are good to go and ready to push your code and make a pull request, if met with further conflicts repeat the process or leave a comment in your PR tagging a maintainer.


## Code of conduct

- Kindly check the [code_of_conduct.md](./code_of_conduct.md) for a complete detailed information.


## Communication

- Twitter: [Ingressive for Good](https://twitter.com/Ingressive4Good)
- Telegram: [I4G OPEN SOURCE CHALLENGE 2022 CONTRIBUTORS](https://t.me/+pL8u3OvU-ss3MTk0)


## Licensing

The I4G frontend 2022 project is an open source and under public licensing. Let's all Contribute!😃
