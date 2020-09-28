# Technical Design Document

**Author**: AJ Clemente <areljann.c@gmail.com>

---

## Table of Contents
1. [Introduction](#introduction)
    1. [Rationale](#rationale)
    2. [Background](#background)
    3. [Terminology](#terminology)
    4. [Non-Goals](#non-goals)
2. [Product Requirements](#product-requirements)
3. [Technical Requirements](#technical-requirements)
4. [Technical Design](#technical-design)
5. [User Interface](#user-interface)
6. [Testing](#testing)

---

## Introduction

### Rationale

#### What are you trying to accomplish?

- create a platform for mechanical keyboard enthusiasts to share their creations and its specifications
- [pcpartpicker.com](https://pcpartpicker.com) but for mechanical keyboards
- mechanical keyboard market for users to buy, sell and trade from each other
- easily lookup a mechanical keyboard's specifications from its switches, to case, to keycaps, etc.
- easily find which vendor sells those said specfication items

#### What's wrong with things the way they are now?

- my brother and his friend builds custom mechanical keyboards
- I ask too many times where I can order parts for a build I want but takes too much time to find an online store, etc.
- if only there's a way I can plan my new mechanical keyboard build like [pcpartpicker.com](https://pcpartpicker.com), this process would be easier

### Background

Building a custom mechanical keyboard is fun. Unfortunately, ordering those individual parts is not a fun task.

One has to do a great amount of researching and networking on various sites, forums and private group chats to gather up all the required parts in building a custom mechanical keyboard.

For those who are trying to build their first custom mechanical keyboard, they have to initially invest a great of amount of time looking for online stores, let alone finding one that would ship to their country in an affordable fee.

### Terminology

- **MKB**: mechanical keyboard
- **CMKB**: custom mechanical keyboard
- other terms can be found [here](https://mechanicalkeyboards.com/terms.php)

### Non-Goals

Here are some things that this platform will not be focusing on:

- full-fledged eCommerce platform
- advertisement
- revenue

---

## Product Requirements

*These requirements will have more information in the future and will be moved to its own document.*

- User sign-up and sign-in
- User profile onboarding
- CMKB build creation
- CMKB build like, favourite and share functionalities
- Home page like [reddit.com](https://reddit.com) feed showcasing user builds
    - Hot
    - Trending
    - Top by date range
- CMKB build inspection

---

## Technical Requirements

### Platforms

- Web app
- PWA

### Hosting

- Heroku
- AWS S3
- GitHub

### Front-End

- Next.js
- React.js
- Redux
- TypeScript

### Back-End

- Node.js
- Express
- Redis

### Database

- PostgreSQL

### Authentication

- Firebase Authentication

---

## Technical Design

*None for now; expect this section to only provide a summary because the in-depth technical design will be moved to its own document.*

---

## User Interface

*None for now; expect this section to only provide a summary because the in-depth user interface diagrams will be moved to its own document.*

---

## Testing

*None for now; expect this section to only provide a summary because the in-depth testing will be moved to its own document.*

---