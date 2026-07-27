# Lado a Lado Product

## Overview

Lado a Lado is a youth-focused movement brand and marketing site for helping young people discover "the meaning of life in love". The site presents the movement, promotes events and courses, highlights the podcast and merch, and gives visitors clear next actions such as registering, following, donating, or volunteering.

This repository currently behaves like a content-led marketing product, not a full application; but soon it should be an application because it will need to support registrations for the Lado a Lado events. Most content is static and hard-coded into Svelte routes.

## Product Promise

Lado a Lado should feel:

- warm, hopeful, and personal
- explicitly oriented toward older teenagers and young adults
- serious about love, fidelity, marriage, and family
- simple to browse and easy to act on

The core message is consistent across the site: people were made to love, and Lado a Lado offers concrete ways to explore that through events, formation, community, media, and merchandise.

## Primary Audience

- Young people in Portugal who are curious about relationships, vocation, love, marriage, and family life
- Existing supporters who want to stay close to events (or sign up to an event), podcast episodes, and movement updates
- Potential volunteers, donors, and partners

## Product Goals

- Explain what Lado a Lado is in a way that feels emotionally resonant, not institutional
- Turn interest into action through event registration, volunteering, donations, podcast listening, and social follow-through
- Present the movement as credible, youthful, and active
- Reuse a coherent brand system across campaign pages, event pages, and future commerce or fundraising surfaces

## Primary User Actions

- Learn what the movement stands for
- See upcoming events, courses, and formation opportunities
- Register for a specific conference or event
- Listen to the podcast
- Reserve or buy merch
- Follow on Instagram, YouTube, and Spotify
- Become a volunteer or supporter

## Current Information Architecture

### `/`

Main movement homepage. This is the broadest product surface and currently includes:

- hero statement and organizational stats
- section navigation
- live events
- volunteering and formation camps
- courses for young people
- podcast promotion
- merch promotion
- movement / donation call to action
- partner logos
- embedded Instagram feed

This route is the best representation of the overall product scope.

### `/feitosparaamar`

Dedicated event landing page for the "Feitos para amar" conference. It is a more campaign-style experience with:

- branded hero
- event framing and explanatory copy
- schedule
- speaker imagery
- registration emphasis

This route is closer to a one-off event funnel than a general movement homepage.

### `/quem-somos`

Currently a stub. It signals a future need for a proper "about" page covering mission, story, team, and credibility.

### `/links`

Currently a minimal link hub. It appears intended for lightweight social/link-in-bio use.

## Content Model

The current site revolves around a small set of repeatable content types:

- movement pages
- event pages
- schedules
- speakers
- partner logos
- social links
- podcast links
- merch promotions
- volunteer / donor calls to action

Today these are mostly encoded directly in route files. A future content system could extract them into structured data or a CMS, but that is not part of the current product.

## Product Constraints

- Static-first architecture: no authenticated user flows, checkout, or back-office tooling in this repo
- Content is maintained in code
- Conversion actions are mostly outbound or placeholder buttons today
- The site needs to carry both evergreen movement messaging and event-specific campaigns

## Non-Goals

At its current maturity, this product is not trying to be:

- a social network
- a member portal
- an event management platform
- a full e-commerce system
- a donation processing system

Those actions may be linked out to external tools, but they are not implemented as native product capabilities here.

## Product Priorities

If the site is being expanded, the most valuable next product moves are:

1. Turn placeholder CTAs into real destinations or forms.
2. Add complete About, Contact, and event-detail content.
3. Consolidate repeated event data into a reusable structure.
4. Clarify the relationship between the movement homepage and campaign/event landing pages.
5. Add an editorial workflow for upcoming events, podcast episodes, and partners.

