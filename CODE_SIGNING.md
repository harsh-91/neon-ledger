<!-- Created by Harsh (@harsh-91) | Made in India -->
# Code signing policy

## Current status

Statement Importer `v1.2.0` is currently unsigned. It must not be represented as signed until a trusted Authenticode signature has been applied and independently verified.

The project is preparing an application for **free code signing provided by SignPath.io, certificate by SignPath Foundation**. Signing can begin only after the open-source project is reviewed and approved by SignPath Foundation.

## Team roles

- Committer and reviewer: [Harsh (@harsh-91)](https://github.com/harsh-91)
- Signing approver: [Harsh (@harsh-91)](https://github.com/harsh-91)

## Release policy

- Signed artifacts must be built from the public [Statement Importer repository](https://github.com/harsh-91/statement-importer).
- Product name, version and publisher metadata must match the release.
- Every signed release must publish SHA-256 checksums.
- A signature must be verified before an artifact is attached to a public release.
- Unsigned historical releases remain clearly identified as unsigned.

## Privacy policy

Statement Importer will not transfer any information to other networked systems unless specifically requested by the user or the person installing or operating it. Optional prerequisite downloads, REST API access and MCP access occur only when the user explicitly enables or requests them. Bank statements, statement passwords and imported transaction data remain on the user's computer.

Third-party runtime and build components retain their own licenses and privacy terms.
