# Product Requirements Document

**Author**: AJ Clemente <areljann.c@gmail.com>

---

## Table of Contents
1. [Users](#users)
2. [Mechanical Keyboards](#mechanical-keyboards)
3. [Social](#social)

---

## Users

### Sign-Up

This is pretty straightforward... allow the user to sign-up using their Google accounts or with their email.

In order to keep this process simple, integrating Firebase Authentication with this web app would be ideal. More info on this in the **Technical Requirements Document**.

### Sign-In

Once the user has signed-up, allow them to sign-in to their accounts on any device.

### Password Reset

Do I need to explain what a **password reset** does? No.

This process will be dependent on which authentication service this web app will be using.

### Delete Account

Allow the user to delete their account. Their account will **soft-deleted** for 30 days so they have the option to cancel the deletion process. Once the 30 days are over and they chose not to cancel the deletion process, wipe everything related to the user's account.

### Profile Customization

Allow the user to customize their profile page; similar to Twitter. Users viewing other profiles should be similar to Instagram.

It's kind of like Instagram, but for MKBs.

---

## Mechanical Keyboards

### Parts Builder

Try building a PC from [pcpartpicker.com](https://pcpartpicker.com). This should very similar to that. We should allows users to share their builds via URL links.

### Build Inspector

Allow the user to view and inspect a build. [pcpartpicker.com](https://pcpartpicker.com) allows the user to edit a build directly which can be its own unique build.

---

## Social

### Build Social System

Similar to [abletonthemes.com](https://www.abletonthemes.com/), we should allow the user to **like** and **favourite** builds. This encourages community building and user spotlights in the web app.

### Home Page

[reddit.com](https://reddit.com) and [abletonthemes.com](https://www.abletonthemes.com/) have great home pages that allow new users to view popular and trending content. This web app should be able to do this so we can have more users that want to participate in the community,

---