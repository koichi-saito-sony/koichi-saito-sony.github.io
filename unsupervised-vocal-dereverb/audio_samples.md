---
title: Audio samples
---
# Audio samples

Reverb conversion (RC) [1] and Music enhancement (ME)[^1] [2] are trained with the paris of wet and dry vocals.
Weighted prediction error (WPE) [3], **Proposed**, and **Proposed+** are unsupervised method.
Pre-trained model of proposed methods is trained with only dry vocals.

|Methods|Manner|Sample 1|Sample 2|Sample 3|
|:--:|:--:|:--:|:--:|:--:|
|Wet| - |<audio controls="controls"><source src="audio/audio_008_vocals_dry.mp3" type="audio/mp3" /></audio> <br/>|<audio controls="controls"><source src="audio/audio_008_vocals_dry.mp3" type="audio/mp3" /></audio> <br/>|<audio controls="controls"><source src="audio/audio_008_vocals_dry.mp3" type="audio/mp3" /></audio> <br/>|
|RC [1]| Supervised|b|c||
|ME [2]| Supervised|b|c||
|WPE [3]| Unsupervised|b|c||
|**Proposed**| Unsupervised|b|c||
|**Proposed+**| Unsupervised|b|c||

*Since ME is trained with 16 kHz vocals, all samples of ME are sampled at 16 kHz.* 

# Reference
[1] Koo, S. Paik, and K. Lee, "Reverb conversion of mixed vocal tracks using an end-to-end convolutional deep neural network," in Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing, 2021, pp. 81–85.

[2] N. Kandpal, O. Nieto, and Z. Jin, "Music enhancement via image translation and vocoding," in Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing, 2022, pp. 3124–3128.

[3] T. Nakatani, T. Yoshioka, K. Kinoshita, M. Miyoshi, and B.-H. Juang, "Speech dereverberation based on variance-normalized delayed linear prediction," IEEE Transactions on Audio, Speech, and Language Processing, vol. 18, pp. 1717–1731, 2010.