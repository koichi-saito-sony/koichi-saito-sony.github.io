import os
import librosa
import soundfile as sf

def downsample_wav_files(input_folder, target_sample_rate=16000):
    # 指定されたフォルダー内のすべての.wavファイルを取得
    wav_files = [f for f in os.listdir(input_folder) if f.endswith('.wav')]

    # 各.wavファイルを読み込んでダウンサンプリングし、保存
    for wav_file in wav_files:
        input_path = os.path.join(input_folder, wav_file)
        output_path = os.path.join(input_folder, f"{wav_file}")

        # オーディオファイルを読み込み
        y, sr = librosa.load(input_path, sr=None)

        # ダウンサンプリング
        y_resampled = librosa.resample(y, sr, target_sample_rate)

        # ダウンサンプリングされたオーディオファイルを保存
        sf.write(output_path, y_resampled, target_sample_rate)
        print(f"{wav_file} を {target_sample_rate}Hz にダウンサンプリングして保存しました。")

# 使用例
input_folder = '/home/koichi/project/consistency-tta.github.io/audio_2'
downsample_wav_files(input_folder)
