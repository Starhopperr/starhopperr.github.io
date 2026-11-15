---
title: "SYNQ — Secure Real-Time Messaging with End-to-End Encryption"
description: "An Android messaging application implementing the Signal Protocol (X3DH and Double Ratchet) for end-to-end encryption, with exploration of post-quantum cryptography for long-term communication security."
pubDate: 2026-11-14
updatedDate: 2026-11-14
draft: false
status: "In Development"
technologies:
  - Java
  - Android
  - Signal Protocol
  - X3DH
  - Double Ratchet
  - AES
  - SHA-256
  - Post-Quantum Cryptography
repositoryURL: "https://github.com/Starhopperr/SYNQ"
coverImage: "/images/SYNQ.png"
featured: true
isResearch: false
---

## Overview

SYNQ is a secure real-time messaging application for Android, built to explore modern end-to-end encryption through hands-on implementation of the Signal Protocol.

## Problem

Mainstream messaging applications often abstract cryptographic implementation details entirely. SYNQ exists to study the Signal Protocol at the implementation level — understanding exactly how X3DH key agreement, the Double Ratchet algorithm, and forward secrecy combine to deliver strong messaging security guarantees.

## Architecture

SYNQ implements the following cryptographic primitives and protocols:

- **X3DH (Extended Triple Diffie-Hellman):** Initial key agreement establishing a shared secret between parties without requiring a prior shared secret.
- **Double Ratchet Algorithm:** Provides both forward secrecy and break-in recovery by advancing a ratchet with every message.
- **AES Encryption:** Symmetric encryption of message payloads.
- **SHA-256:** Password hashing.

## Implementation

The application is written in Java targeting the Android platform. The cryptographic layer implements Signal Protocol primitives to study their behaviour under real network conditions.

> **Note:** This is an ongoing research and learning project. Features described represent current implementation goals; some components are still under active development.

## Security Considerations

- End-to-end encryption ensures only communicating parties can read messages.
- Forward secrecy means compromise of a long-term key does not expose past session keys.
- Post-quantum cryptography extensions are being explored to protect against future quantum adversaries.

## Future Work

- Integration of post-quantum key encapsulation mechanisms (e.g., CRYSTALS-Kyber) alongside classical X3DH.
- Formal security analysis of the implemented protocol.
- Evaluation of overhead introduced by post-quantum primitives.

## Repository

Source code: [github.com/Starhopperr/SYNQ](https://github.com/Starhopperr/SYNQ)
