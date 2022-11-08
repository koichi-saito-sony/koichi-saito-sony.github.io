---
title: Audio samples
---
# Audio samples

Reverb conversion (RC) [1] and Music enhancement (ME) [2] are trained with the paris of wet and dry vocals.
Weighted prediction error (WPE) [3], **Proposed**, and **Proposed+** are the unsupervised methods.
The pre-trained model of proposed methods is only trained with the dry vocals.
<table align="center"  style="text-align: center;">
  <thead>
    <tr>
      <th style="text-align: center;">Methods</th>
      <th style="text-align: center;">Sample 1 w/ short reverb</th>
      <th style="text-align: center;">Sample 2 w/ short reverb</th>
      <th style="text-align: center;">Sample 1 w/ long reverb</th>
      <th style="text-align: center;">Sample 2 w/ long reverb</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Wet (Unprocessed)</td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Wet/Vo_008_rev04_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Wet/Vo_018_rev00_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Wet/Vo_008_rev02_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Wet/Vo_018_rev02.wav"></audio></td>
    </tr>
    <tr>
      <th style="text-align: center;"><a href="https://arxiv.org/abs/2103.02147">RC [1]</a></th>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/RC/RC_Vo_008_rev04_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/RC/RC_Vo_018_rev00_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/RC/RC_Vo_008_rev02_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/RC/RC_Vo_018_rev02.wav"></audio></td>
    </tr>
    <tr>
      <th style="text-align: center;"><a href="https://arxiv.org/abs/2204.13289">ME [2]</a></th>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ME/ME_Vo_008_rev04_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ME/ME_Vo_018_rev00_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ME/ME_Vo_008_rev02_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ME/ME_Vo_018_rev02_norm.wav"></audio></td>
    </tr>
    <tr>
      <th style="text-align: center;"><a href="https://ieeexplore.ieee.org/document/5547558">WPE [3]</a></th>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/WPE/WPE_Vo_008_rev04_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/WPE/WPE_Vo_018_rev00.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/WPE/WPE_Vo_008_rev02_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/WPE/WPE_Vo_018_rev02.wav"></audio></td>
    </tr>
    <tr>
      <th style="text-align: center;">Proposed</th>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Proposed/Proposed_Vo_008_rev04_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Proposed/Proposed_Vo_018_rev00_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Proposed/Proposed_Vo_008_rev02_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Proposed/Proposed_Vo_018_rev02.wav"></audio></td>
    </tr>
    <tr>
      <th style="text-align: center;">Proposed+</th>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Proposed+/Proposed+_Vo_008_rev04_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Proposed+/Proposed+_Vo_018_rev00_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Proposed+/Proposed+_Vo_008_rev02_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Proposed+/Proposed+_Vo_018_rev02.wav"></audio></td>
    </tr>
  </tbody>
</table>    
<br>

*Since ME is trained with 16 kHz vocals, all samples of ME are sampled at 16 kHz.* 

# Reference
[1] Koo, S. Paik, and K. Lee, "Reverb conversion of mixed vocal tracks using an end-to-end convolutional deep neural network," in Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing, 2021, pp. 81–85.

[2] N. Kandpal, O. Nieto, and Z. Jin, "Music enhancement via image translation and vocoding," in Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing, 2022, pp. 3124–3128.

[3] T. Nakatani, T. Yoshioka, K. Kinoshita, M. Miyoshi, and B.-H. Juang, "Speech dereverberation based on variance-normalized delayed linear prediction," IEEE Transactions on Audio, Speech, and Language Processing, vol. 18, pp. 1717–1731, 2010.