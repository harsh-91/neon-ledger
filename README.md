<!-- Created by Harsh (@harsh-91) | Made in India -->
# Neon Ledger

**Created by [Harsh (@harsh-91)](https://github.com/harsh-91) · Made in India 🇮🇳**

Neon Ledger is the public download and documentation site for [Statement Importer](https://github.com/harsh-91/statement-importer), an offline-first Windows utility that reconciles bank statements into PostgreSQL and offers read-only REST API and MCP access.

## Public site

GitHub Pages publishes this repository at:

<https://harsh-91.github.io/neon-ledger/>

The installer itself is downloaded from the official Statement Importer GitHub release. The page includes installation instructions, system requirements, API/MCP connection guidance and the release SHA-256 checksum.

## Safety

- No statements, account data, database backups, passwords or API keys belong in this repository.
- Statement Importer operates locally and binds its optional API/MCP services to `127.0.0.1` by default.
- Version 1.3.0 is unsigned. Verify its published SHA-256 checksum while trusted code-signing approval is pending.
- Version 1.3.0 includes an explicitly controlled updater that refuses unsigned installers; no download or install is silent.
- One-click local database setup remains the recommended path; manual PostgreSQL connection fields are an Advanced option.

## License

The website source is released under the [MIT License](LICENSE.md). Statement Importer has its own MIT license in the application repository.

See [CODE_SIGNING.md](CODE_SIGNING.md) for the code-signing policy and current status.
