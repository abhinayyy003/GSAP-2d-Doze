# Video Frame Extractor

A simple but powerful bash script that uses **FFmpeg** to extract every frame from a video file and save them as sequentially numbered images (e.g., `frame_0001.png`, `frame_0002.png`, etc.).

This tool is perfect for preparing assets for web-based scroll animations (using libraries like GSAP and ScrollTrigger), creating GIFs, or any other project that requires individual frames from a video source.

***

## Prerequisites

Before you begin, ensure you have the following installed on your system (the instructions below are for macOS):

* **Homebrew**: The missing package manager for macOS.
* **FFmpeg**: A complete, cross-platform solution to record, convert and stream audio and video.

***

## Installation

1.  **Install Homebrew**
    Open your terminal and run the following command to install the Homebrew package manager:

    ```bash
    /bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"
    ```

2.  **Install FFmpeg**
    Once Homebrew is installed, use it to install FFmpeg:

    ```bash
    brew install ffmpeg
    ```

***

## Usage

Follow these steps to use the `extract_frames.sh` script to process your video.

1.  **Download the Script**
    Clone or download the `extract_frames.sh` script from this repository to your local machine.

2.  **Make the Script Executable**
    In your terminal, navigate to the directory where you saved the script and run the `chmod` command to make it executable:

    ```bash
    chmod +x extract_frames.sh
    ```

3.  **Execute the Script**
    Run the script with the following command, providing two arguments: the path to your source video and the path to the folder where you want to save the extracted frames.

    ```bash
    ./extract_frames.sh [VIDEO_PATH] [OUTPUT_DIRECTORY]
    ```

    * `[VIDEO_PATH]`: The relative or absolute path to the video file you want to process (e.g., `~/Desktop/my_video.mp4`).
    * `[OUTPUT_DIRECTORY]`: The path to the folder where the image frames will be saved. **The script will create this directory if it doesn't exist.**

***

## Example

Let's say you have a video named `source.mov` on your Desktop and you want to extract the frames into a new folder called `output_frames`.

You would run the following command:

```bash
./extract_frames.sh ~/Desktop/source.mov ~/Desktop/output_frames
```

The script will then create the `output_frames` folder on your Desktop and fill it with PNG images named `frame_0001.png`, `frame_0002.png`, and so on.
