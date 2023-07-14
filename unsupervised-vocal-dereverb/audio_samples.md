---
title: Audio samples
---
# Vocal dereverberation samples from GibbsDDRM and DiffDereverb

**DiffDereverb w/ GibbsDDRM [1, ICML2023]**, **DiffDereverb [2, ICASSP2023]**, and **DiffDereverb+ [2, ICASSP2023]** are our proposed methods.
The pre-trained diffusion models of proposed methods are only trained with the dry vocals.
Reverb conversion (RC) [3] and Music enhancement (ME) [4] are trained with the paris of wet and dry vocals.

<table align="center"  style="text-align: center;">
  <thead>
    <tr>
      <th style="text-align: center;">Methods</th>
      <th style="text-align: center;">Sample 1 w/ long reverb</th>
      <th style="text-align: center;">Sample 2 w/ long reverb</th>
      <th style="text-align: center;">Sample 1 w/ short reverb</th>
      <th style="text-align: center;">Sample 2 w/ short reverb</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Wet <br> (Unprocessed)</td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Wet/Vo_008_rev02.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Wet/Vo_018_rev02_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Wet/Vo_008_rev04_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Wet/Vo_018_rev00_norm.wav"></audio></td>
    </tr>
    <tr>
      <th style="text-align: center;"><a href="https://arxiv.org/abs/2301.12686">DiffDereverb w/ GibbsDDRM [1, ICML2023] <br> (Unsupervised)</a></th>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/GibbsDDRM/GibbsDDRM_Vo_008_rev02.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/GibbsDDRM/GibbsDDRM_Vo_018_rev02_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/GibbsDDRM/GibbsDDRM_Vo_008_rev04_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/GibbsDDRM/GibbsDDRM_Vo_018_rev00_norm.wav"></audio></td>
    </tr>
    <tr>
      <th style="text-align: center;"><a href="https://ieeexplore.ieee.org/document/10095761">DiffDereverb [2, ICASSP2023] <br> (Unsupervised)</a></th>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Proposed/Proposed_Vo_008_rev02.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Proposed/Proposed_Vo_018_rev02_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Proposed/Proposed_Vo_008_rev04_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Proposed/Proposed_Vo_018_rev00_norm.wav"></audio></td>
    </tr>
    <tr>
      <th style="text-align: center;"><a href="https://ieeexplore.ieee.org/document/10095761">DiffDereverb+ [2, ICASSP2023] <br> (Unsupervised)</a></th>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Proposed+/Proposed+_Vo_008_rev02.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Proposed+/Proposed+_Vo_018_rev02_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Proposed+/Proposed+_Vo_008_rev04_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/Proposed+/Proposed+_Vo_018_rev00_norm.wav"></audio></td>
    </tr>
    <tr>
      <th style="text-align: center;"><a href="https://arxiv.org/abs/2103.02147">RC [3] <br> (Supervised)</a></th>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/RC/RC_Vo_008_rev02.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/RC/RC_Vo_018_rev02_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/RC/RC_Vo_008_rev04_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/RC/RC_Vo_018_rev00_norm.wav"></audio></td>
    </tr>
    <tr>
      <th style="text-align: center;"><a href="https://arxiv.org/abs/2204.13289">ME [4] <br> (Supervised)</a></th>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ME/ME_Vo_008_rev02_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ME/ME_Vo_018_rev02_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ME/ME_Vo_008_rev04_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/ME/ME_Vo_018_rev00_norm.wav"></audio></td>
    </tr>
    <tr>
      <th style="text-align: center;"><a href="https://ieeexplore.ieee.org/document/5547558">WPE [5] <br> (Unsupervised)</a></th>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/WPE/WPE_Vo_008_rev02.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/WPE/WPE_Vo_018_rev02_norm.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/WPE/WPE_Vo_008_rev04.wav"></audio></td>
      <td><audio  controls="" style="width:150px;" preload="auto">
            <source src="audio/WPE/WPE_Vo_018_rev00_norm.wav"></audio></td>
    </tr>
  </tbody>
</table>    
<br>

*Note that the audio samples of ME are 16 kHz since ME is trained with 16 kHz vocals. All the other audio samples are 44.1 kHz.* 

# Reference
[1] N. Murata, K. Saito, C.-H. Lai, Y. Takida, T. Uesaka, Y. Mitsufuji, S. Ermon, "GibbsDDRM: A Partially Collapsed Gibbs Sampler for Solving Blind Inverse Problems with Denoising Diffusion Restoration," 40th International Conference on Machine Learning, 2023.

[2] K. Saito, N. Murata, T. Uesaka, C.-H. Lai, Y. Takida, T. Fukui, Y. Mitsufuji, "Unsupervised Vocal Dereverberation with Diffusion-Based Generative Models," in Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing, 2023, pp. 1–5.

[3] Koo, S. Paik, and K. Lee, "Reverb conversion of mixed vocal tracks using an end-to-end convolutional deep neural network," in Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing, 2021, pp. 81–85.

[4] N. Kandpal, O. Nieto, and Z. Jin, "Music enhancement via image translation and vocoding," in Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing, 2022, pp. 3124–3128.

[5] T. Nakatani, T. Yoshioka, K. Kinoshita, M. Miyoshi, and B.-H. Juang, "Speech dereverberation based on variance-normalized delayed linear prediction," IEEE Transactions on Audio, Speech, and Language Processing, vol. 18, pp. 1717–1731, 2010.
