# Updating B2B Pages

> First, solve the problem. Then, write the code.  
> -- John Johnson

## Product pages

Product pages are divided into blocks that are placed underneath each other, grouped in the `_data/products` directory. Here you find a directory for each page (i.e. `greenfee` for the `greenfee.html` page). These blocks can be updated (or added) to change the text on the page. The number in front of the filename manages the order of the blocks on the page.

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

# Install

> Any fool can write code that a computer can understand. Good programmers write code that humans can understand.  
> -- Martin Fowler

```
bundle install
```

# Run

```
bundle exec jekyll serve --safe
```

# Notes

Use the `--safe` parameter! This ensures that it will run on Github Pages as well.
