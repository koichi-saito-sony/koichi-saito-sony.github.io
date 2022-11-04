---
layout: default
title: [Unsupervised vocal dereverberation with diffusion-based generative models]
description: Koichi Saito, Naoki Murata, Toshimitsu Uesaka, Chieh-Hsin Lai, Yuhta Takida, Takao Fukui, Yuki Mitsufuji 
---



# Abstract
Removing reverb from reverberant music is a necessary technique to clean up audio for downstream music manipulations. Reverberation of music contains two categories, natural reverb, and artificial reverb. Artificial reverb has a wider diversity than natural reverb due to its various parameter setups and reverberation types. However, recent supervised dereverberation methods may fail because they rely on sufficiently diverse and numerous pairs of reverberant observations and retrieved data for training in order to be generalizable to unseen observations during inference. To resolve these problems, we propose an unsupervised method that can remove a general kind of artificial reverb for music without requiring pairs of data for training. The proposed method is based on diffusion models, where it initializes the unknown reverberation operator with a conventional signal processing technique and simultaneously refines the estimate with the help of diffusion models. We show through objective and perceptual evaluations that our method outperforms the current leading vocal dereverberation benchmarks.

# Audio Samples

Audio samples are [here](./audio_samples.md).

# Paper

Please see our [paper](https://arxiv.org/).

# Network architecture

Detail explanations of the network architecture are [here](./network.md)
