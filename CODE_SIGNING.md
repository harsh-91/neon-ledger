<!-- Created by Harsh (@harsh-91) | Made in India | SPDX-License-Identifier: Apache-2.0 -->
# Code signing policy

## Current status

Statement Importer `v1.6.4` is currently unsigned. Verify the published SHA-256 before running the installer. Versions older than 1.6.3 reject unsigned installers, so install 1.6.4 manually from those versions. The 1.6.3 and later in-app control verifies downloads and labels unsigned installers before you choose to open them.

The `v1.6.4-mac-beta.1` macOS builds are ad hoc signed only. They have no Apple Developer ID signature or notarization. Check the [beta release](https://github.com/harsh-91/statement-importer/releases/tag/v1.6.4-mac-beta.1) for separate Apple Silicon and Intel downloads and SHA-256 checksums. The in-app control verifies and reveals beta ZIPs; replacing the app remains manual.

The SignPath Foundation application was not approved at the project's current adoption level. The primary future distribution route is Microsoft Store MSIX. Microsoft signs accepted Store packages, but Store approval is still pending.

## Team roles

- Committer and reviewer: [Harsh (@harsh-91)](https://github.com/harsh-91)
- Signing approver: [Harsh (@harsh-91)](https://github.com/harsh-91)

## Release policy

- Signed artifacts must be built from the public [Statement Importer repository](https://github.com/harsh-91/statement-importer).
- Product name, version and publisher metadata must match the release.
- Every signed release must publish SHA-256 checksums.
- A signature must be verified before an artifact is attached to a public release.
- Unsigned historical releases remain clearly identified as unsigned.
- The in-app updater rejects invalid or unexpected Windows signatures. Unsigned beta installers require a matching GitHub digest and release SHA-256, and an explicit click to open.

## Privacy policy

Statement Importer will not transfer any information to other networked systems unless specifically requested by the user or the person installing or operating it. Optional prerequisite downloads, REST API access and MCP access occur only when the user explicitly enables or requests them. Bank statements, statement passwords and imported transaction data remain on the user's computer.

Third-party runtime and build components retain their own licenses and privacy terms.
