<style type="text/css">
  table {
    width: 100%;
  }

  td > img {
    max-height: 200px;
  }
</style>

# Translations

## General translations

The general translations can be found in the files in `_data/i18n` (i.e. `_data/i18n/en.yml`), these files have the same structure for all languages and are separated in various blocks.

|     |     |
|:--- | --- |
| `site` | These are the site-wide translations, such as the title of the site and the SEO description
| `global` | These are translations that are used on almost all pages, such as the title for the contact form, and the labels for pricing and feature buttons
| `contact` | Here you will find the translations for the contact form. Each field has a `label` and a helptext (`help`). Also the success and error messages can be translated here.
| `mainMenu` | These are the labels shown in the top navigation bar. Each link has their own translation, and can so be changed.
| `footer` | Here are the translations for the links and other text shown in the footer, such as the brochure links and the copyright.
| `blocks` | Here are titles for various blocks that are used in the site, such as the FAQ and the `What can Nexxchange do for you` block that is present under each page.
| `pages` | These are translations for some pages that do not have their own files in the `_data/pages` directory.

See also the comments (lines starting with a `#` sign) for more information in these files.

## Homepage

Translations of the homepage are found in the `_data/homePage/[lang].yml` files. Each block on the homepage has a corresponding block in the translation file. See the [`_data/homePage/en.yml`](_data/homePage/en.yml) file for more details.

<details>
<summary>Example "features block"</summary>

```yml
features:
  item1:
    title: Increase revenues with the Portal
    description: Book a tee time, a tournament or any extra service with any computer, smartphone or tablet. Adjust prices to any product in real-time.
  item2:
    title: Included widget for your website
    description: Easily install the booking widget on any website in minutes. Decrease phone calls and no-shows. Encourage prepayment to avoid any loss of revenue.
  item3:
    title: Compatible with any device
    description: Your booking experience will be smooth and enjoyable for your customers from any device. All information entered is saved in your customer database.
```

![features](assets/docs/features.png)
</details>

There are 4 special blocks on the homepage, which are the **About Us**, **FAQ**, **Our Team** and **Testimonials** blocks. These are defined in the `_data/homePage` directory, as a `[lang].yml` file per language. The only exception being the listing of team members, which are the same in any language.

| Block | Directory | Description |
|:----- | --------- | ----------- |
| **About Us** | `_data/homePage/about` | Unique selling points shown below the video banner, grouped in rows of 3, with an accompanying icon
| **FAQ** | `_data/homePage/faq` | Questions and answers shown near the bottom of the homepage
| **Our Team** | `_data/homePage/team` | Listing of team members (see [below](#team-members))
| **Testimonials** | `_data/homePage/testimonials` | Listing of testimonials, made by clients, shown at the bottom of the homepage

<details>
  <summary>Example <strong>About Us</strong></summary>

```yml
- title: 100% Cloud based
  description: No updates, no backups, no servers needed, enhanced safety.
  icon: arrow
```
</details>

<details>
  <summary>Example <strong>FAQ</strong></summary>

```yml
- question: Is Nexxchange suitable for multi course operators?
  answer: >-
    Nexxchange was actually designed for multi course operators who manage golf courses
    and hotels in a company organization. Due to the centralized structure of the
    software you can run all you entire operation from a simple app.
```
</details>

<details>
  <summary>Example <strong>Testimonial</strong></summary>

```yml
- name: Ingrid
  role: GC secretary
  text: >-
    It is so enjoyable to work with your software. Since then, everything is much easier for me.<br>
    I recommend you everywhere !
```
</details>


### Team Members

Team members have two fields that are required:

|     |     |
|:--- | --- |
| `name` | The name of the team member
| `function` | The role or function of the team member

Furthermore a team member can have a `contact` field (see the example below) with the contact details. These 

|     |     |
|:--- | --- |
| `phone` | The phonenumber on which this team member can be reached
| `email` | The email address where this team member can be reached. Additional parameters such as the email subject (`subject=`) and CC address (`cc=`) can be added here as well, after a `?` and separated by `&`.
| `linkedin` | The linkedin profile of this team member

<details>
  <summary>Example team member without contact details</summary>

```yml
- name: Roberto Examplar
  function: Example Team Member
```
</details>

<details>
  <summary>Example team member with contact details</summary>

```yml
- name: Roberto Examplar
  function: Example Team Member
  contact:
    phone: +31123456789
    email: roberto.examplar@nexxchange.com
    linkedin: https://linkedin.com/roberto-examplar/
```
</details>

## Pages

Pages are divided into multiple files:

- layout files
- translations
- content blocks

Page translations are split up into two parts, the general information such as title and the information block at the top, and the blocks that are the actual content of the page.
The general information can be found in the `pages` section of the general translations (See [General translations](#general-translations)) and are fairly simple.

|     |     |
|:--- | --- |
| `title` | The title of the page, this will also be shown in the title of the browser window
| `headerTitle` | The title of the information block. See the below screenshot.
| `headerSubtitle` | The subtitle of the information block. See the below screenshot.
| `headerImage` | The image to be shown in the information block.

<details>
<summary>Example "Member golf" page info</summary>

```yml
members:
  title: Member Golf
  headerTitle: Offer your members<br> the best experience
  headerSubtitle: Nexxchange can help you provide your members with the best service
  headerImage: head-golf-features
```

![Page Header](assets/docs/page-header.png)
</details>

> **Warning** This block must exist for every page and must have the same key as the content blocks directory and the `title:` element of the [Frontmatter](#frontmatter).

> For an overview of the image, see [below](#header-images)

Each page contains two parts, the frontmatter and the content. The frontmatter is the part between the 3 dashes (`---`), the content comes after the last 3 dashes.

### Frontmatter

This is the information that the page needs to be shown properly. 

|     |     |
|:--- | --- |
| `id` | The identifier of the page, this is the language code followed by a dash (`-`) and the filename without the `.html` part (i.e. `en-accounting`)
| `title` | This is the key for the translated title (see [Page translations](#page-translations)), i.e. `accounting`. **One note about the title**: If the title contains spaces (such as `"Golf Multi Site"`), the spaces must be removed, and the words capitalized, for example: `golfMultiSite`.
| `lang` | This is the language code for the page, i.e. `en` for English
| `permalink` | This is the url for the page itself, i.e. `/en/accounting/`. This should always start with a slash (`/`) followed by the language code and another slash. 
| `layout` | This is the layout that is used for this page, this is `default-en` for English, and `default-de` for German.
| `navbarClass` | This changes the color of the navigation bar at the top of the page. This value should not be changed

### Content blocks

The content blocks can be found in the `_data/pageBlocks` directory. Each page that uses these blocks has their own directory in each of the language directories.
These blocks are then shown sorted by filename in the page.

See: [Updating B2B Pages](#updating-b2b-pages)

# Adding B2B Pages

To add a new B2B page, a `.html` file needs to be added to every directory in the `/pages` directory (i.e. `en` and `de`).

Follow the following steps (example: English, page: Accounting):

1. Copy the `/pages/.skel.html` file to the `/pages/en/` directory
2. Rename the `/pages/en/.skel.html` file to `accounting.html`
3. Open the `/pages/en/accounting.html` file
4. Replace all instances of `[lang]` in the frontmatter for the language code: `en`
5. Fill in the title with `accounting`
5. You are done, you can now start adding [content blocks](#page-translations)!

This will result in the following frontmatter:

```yml
---
# page information
id: en-accounting
title: accounting
lang: en

# url
permalink: /en/accounting/

# settings
layout: default-en
navbarClass: stick
---
```


# Updating B2B Pages

## Product pages

Product pages are divided into blocks that are placed underneath each other, grouped in the `_data/products/[language]` directory. Here you find a directory for each page (i.e. `greenfee` for the `greenfee.html` page). These blocks can be updated (or added) to change the text on the page. The number in front of the filename manages the order of the blocks on the page.

### Example:

```yml
# 2-stay-in-touch-with-your-customers.yml

title: Stay in touch with your customers
image: image4
description: >-
  Organizing your customer database and communicating adequately and frequently enough is the key to growing your business.
points:
  - Carry out marketing campaigns and conduct bulk mailings
  - Use our e-mail template or build your own to better catch your customers' attention
  - Control partnerships with hotels or companies and send automated monthly statements
  - Create online deals for your golfers and visitors and increase your revenues
```

This results in the following block:

![Stay in touch with your customers Block](assets/docs/greenfee-stay-in-touch.png)

# Header images

|     |     |
|:--- |:---:|
| `head-teesheet` | ![teesheet](assets/img/teesheet.png)
| `head-crm` | ![crm](assets/img/membership.png)
| `head-accounting` | ![accounting](assets/img/sepa.png)
| `head-pos` | ![pos](assets/img/pos.png)
| `head-tournaments` | ![tournaments](assets/img/tournaments1.png)
| `head-statistics` | ![statistics](assets/img/statistics1.jpg)
| `head-onlinebooking` | ![onlinebooking](assets/img/onlinebooking1.jpg)
| `head-golf-features` | ![golf-features](assets/img/golf-features.jpg)
| `head-roombooking` | ![roombooking](assets/img/roombooking.jpg)
| `head-housekeeping` | ![housekeeping](assets/img/housekeeping.jpg)
| `head-checkin` | ![checkin](assets/img/checkin.jpg)
| `head-roomrates` | ![roomrates](assets/img/roomrates.jpg)

# Images

|     |     |
|:--- |:---:|
| `image1` | ![image1](assets/img/teesheet2.png)
| `image2` | ![image2](assets/img/booking.png)
| `image3` | ![image3](assets/img/crm.png)
| `image4` | ![image4](assets/img/crm2.png)
| `image5` | ![image5](assets/img/accounting.png)
| `image6` | ![image6](assets/img/reporting.png)
| `image7` | ![image7](assets/img/pos2.png)
| `image8` | ![image8](assets/img/pos3.png)
| `image9` | ![image9](assets/img/tournaments2.png)
| `image10` | ![image10](assets/img/tournaments3.png)
| `image11` | ![image11](assets/img/statistics2.jpg)
| `image12` | ![image12](assets/img/statistics3.jpg)
| `image13` | ![image13](assets/img/onlinebooking2.jpg)
| `image14` | ![image14](assets/img/onlinebooking3.jpg)
| `image15` | ![image15](assets/img/roombooking2.jpg)
| `image16` | ![image16](assets/img/roombooking3.jpg)
| `image17` | ![image17](assets/img/services-img.png)
| `image18` | ![image18](assets/img/housekeeping3.jpg)
| `image19` | ![image19](assets/img/checkin2.jpg)
| `image20` | ![image20](assets/img/checkin3.jpg)
| `image21` | ![image21](assets/img/roomrates2.jpg)
| `image22` | ![image22](assets/img/roomrates3.jpg)
| `image23` | ![image23](assets/img/CRM_group.jpg)
| `image24` | ![image24](assets/img/booking_members.jpg)
| `image25` | ![image25](assets/img/pos4.jpg)
| `image26` | ![image26](assets/img/multiSite.jpg)
| `image27` | ![image27](assets/img/online-payment.jpg)
