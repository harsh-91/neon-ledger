<!-- Created by Harsh (@harsh-91) | Made in India | SPDX-License-Identifier: Apache-2.0 -->
# Neon Ledger

**Created by [Harsh (@harsh-91)](https://github.com/harsh-91) · Made in India 🇮🇳**

Neon Ledger is the public download and documentation site for [Statement Importer](https://github.com/harsh-91/statement-importer), an offline-first Windows utility that reconciles bank statements into PostgreSQL and offers read-only REST API and MCP access.

## Public site

GitHub Pages publishes this repository at:

<https://harsh-91.github.io/neon-ledger/>

The installer itself is downloaded from the official Statement Importer GitHub release. The page includes installation instructions, system requirements, API/MCP connection guidance and the release SHA-256 checksum.

The [privacy policy](privacy.html) explains local statement processing, optional network features, user-sent diagnostic reports and the public support contact.

## Updating the release column

The right-hand transmission log in `index.html` lists exactly three public releases, newest first, with UTC publication dates and short curated summaries. At each release, add the new entry, remove the oldest, and update the superseded-version note alongside the download version and checksum. This static log works without JavaScript or a GitHub API connection. Retro animations use local CSS, offer a pause control, and respect reduced-motion preferences. The column stacks below the introduction on smaller screens.

## Safety

- No statements, account data, database backups, passwords or API keys belong in this repository.
- Statement Importer operates locally and binds its optional API/MCP services to `127.0.0.1` by default.
- Version 1.4.0 is unsigned. Verify its published SHA-256 checksum while trusted code-signing approval is pending.
- Version 1.4.0 verifies executable release before upgrading, shows timed progress, asks before force-closing the selected installation, and offers recovery on failure. Database setup reports live stages and supports retry.
- Version 1.3.2 fixes the existing-database wizard freeze by bounding connection attempts to five seconds.
- Version 1.3.0 includes an explicitly controlled updater that refuses unsigned installers; no download or install is silent.
- One-click local database setup remains the recommended path; manual PostgreSQL connection fields are an Advanced option.

## License

The website and Statement Importer releases from version 1.3.1 are distributed under the [Apache License 2.0](LICENSE.md). Preserve the [NOTICE](NOTICE) attribution in derivative distributions. Versions through 1.3.0 retain their original MIT terms.

See [CODE_SIGNING.md](CODE_SIGNING.md) for the code-signing policy and current status.
