---
title: Audio samples
---
# Audio samples

Reverb conversion (RC) [1] and Music enhancement (ME)[^1] [2] are trained with the paris of wet and dry vocals.
Weighted prediction error (WPE) [3], **Proposed**, and **Proposed+** are unsupervised method.
Pre-trained model of proposed methods is trained with only dry vocals.
<table align="center"  style="text-align: center;">
  <thead>
    <tr>
      <th style="text-align: center;">Methods</th>
      <th style="text-align: center;">Manner</th>
      <th style="text-align: center;">Sample 1</th>
      <th style="text-align: center;">Sample 2</th>
      <th style="text-align: center;">Sample 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Wet</td>
      <td>-</td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ADIZ_09_10_idx_3.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/audio_008_vocals_dry.mp3"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ADIZ_09_10_idx_3.wav"></audio></td>
    </tr>
    <tr>
      <th style="text-align: center;"><a href="https://arxiv.org/abs/2103.02147">RC [1]</a></th>
      <td>Supervised</td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ADIZ_09_10_idx_3.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/audio_008_vocals_dry.mp3"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ADIZ_09_10_idx_3.wav"></audio></td>
    </tr>
    <tr>
      <th style="text-align: center;"><a href="https://arxiv.org/abs/2204.13289">ME [2]</a></th>
      <td>Supervised</td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ADIZ_09_10_idx_3.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/audio_008_vocals_dry.mp3"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ADIZ_09_10_idx_3.wav"></audio></td>
    </tr>
    <tr>
      <th style="text-align: center;"><a href="https://ieeexplore.ieee.org/document/5547558">WPE [3]</a></th>
      <td>Unsupervised</td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ADIZ_09_10_idx_3.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/audio_008_vocals_dry.mp3"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ADIZ_09_10_idx_3.wav"></audio></td>
    </tr>
    <tr>
      <th style="text-align: center;">Proposed</th>
      <td>Unsupervised</td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ADIZ_09_10_idx_3.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/audio_008_vocals_dry.mp3"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ADIZ_09_10_idx_3.wav"></audio></td>
    </tr>
    <tr>
      <th style="text-align: center;">Proposed+</th>
      <td>Unsupervised</td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ADIZ_09_10_idx_3.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/audio_008_vocals_dry.mp3"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ADIZ_09_10_idx_3.wav"></audio></td>
    </tr>
  </tbody>
</table>    
<br>

*Since ME is trained with 16 kHz vocals, all samples of ME are sampled at 16 kHz.* 

# Reference
[1] Koo, S. Paik, and K. Lee, "Reverb conversion of mixed vocal tracks using an end-to-end convolutional deep neural network," in Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing, 2021, pp. 81–85.

[2] N. Kandpal, O. Nieto, and Z. Jin, "Music enhancement via image translation and vocoding," in Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing, 2022, pp. 3124–3128.

[3] T. Nakatani, T. Yoshioka, K. Kinoshita, M. Miyoshi, and B.-H. Juang, "Speech dereverberation based on variance-normalized delayed linear prediction," IEEE Transactions on Audio, Speech, and Language Processing, vol. 18, pp. 1717–1731, 2010.