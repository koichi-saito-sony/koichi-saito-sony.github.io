---
layout: default
title: [Unsupervised vocal dereverberation with diffusion-based generative models]
---
# Abstract
Removing reverb from reverberant music is a necessary technique to clean up audio for downstream music manipulations. Reverberation of music contains two categories, natural reverb, and artificial reverb. In practice, the operation leading to reverb is unknown, which results in a challenging problem. Unlike natural reverb, artificial reverb has wider diversity due to its various parameter setups and reverberation types. Recent supervised dereverberation methods may fail the task as they rely on sufficiently diverse and many pairs of reverberant observations and retrieved data for training in order to be generalizable to unseen observations during inference. To resolve the problems, we propose an unsupervised method which can remove a general kind of artificial reverb for music without requiring pairs of data for training. Our method is based on diffusion models, where it initializes the unknown reverb operator with a conventional signal processing technique and refines the estimation simultaneously with the help of diffusion models. We show our method outperforms current leading vocal dereverberation benchmarks via both objective and perceptual evaluations.
# Paper

For technical details of the work, please see our **ICASSP 2023 Paper**

# Audio Samples

Audio samples are [here](./audio_samples.md).

# Network architecture

Detail explanations of the network detail are [here](./network.md)

