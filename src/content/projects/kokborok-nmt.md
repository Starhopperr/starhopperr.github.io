---
title: "Kokborok–English Neural Machine Translation"
description: "Low-resource neural machine translation for Kokborok-to-English using Meta's M2M100 model, published as a book chapter in Sustainable Developments in Computer Engineering, Green Technology and Smart Systems."
pubDate: 2026-11-14
updatedDate: 2026-11-14
draft: false
status: "Published"
technologies:
  - Python
  - M2M100
  - Transformers
  - NLP
  - PyTorch
  - Low-Resource NMT
featured: false
isResearch: true
doiURL: "https://doi.org/10.1201/9781003743767-121"
---

## Overview

This project presents a neural machine translation (NMT) system for the Kokborok language — a low-resource indigenous language of the Tripura region in northeast India — translating into English. The work was published as a book chapter in *Sustainable Developments in Computer Engineering, Green Technology and Smart Systems*.

## Publication

**Title:** Developing a Neural Machine Translation Tool for Kokborok-to-English: A Step Toward Preserving Indigenous Languages

**Authors:** Sanchali Das, Pranjal, Mainak Sarkar

**Book:** Sustainable Developments in Computer Engineering, Green Technology and Smart Systems

**DOI:** [10.1201/9781003743767-121](https://doi.org/10.1201/9781003743767-121)

## Problem

Kokborok is an underrepresented language in NLP research, with limited digital resources, pre-trained models and parallel corpora. Standard NMT approaches designed for high-resource languages cannot be applied directly. This project investigates how a large multilingual pre-trained model can be fine-tuned effectively on a small Kokborok–English parallel corpus.

## Approach

We fine-tuned Meta's **M2M100** multilingual sequence-to-sequence model on a parallel dataset of approximately 38,000 Kokborok–English sentence pairs. M2M100 supports many-to-many multilingual translation and provides a strong multilingual base for low-resource fine-tuning.

## Role and Contribution

This was a collaborative research project. My contributions included model fine-tuning, evaluation and implementation aspects. Full author attribution is listed in the publication.

## Results

The system was evaluated using the BLEU metric on a held-out test split. Full evaluation methodology and metric details are reported in the published chapter.

## Limitations

- The parallel corpus is small relative to high-resource NMT benchmarks; translation quality reflects this constraint.
- Evaluation was conducted on a fixed test split; out-of-domain generalisation was not separately assessed.
- The system is a research prototype and not a production translation service.
