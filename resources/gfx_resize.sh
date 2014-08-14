#!/bin/bash

EXTRAS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

convert ${EXTRAS_DIR}/icon.png -resize 96 ${EXTRAS_DIR}/android/res/drawable/icon.png
convert ${EXTRAS_DIR}/icon.png -resize 36 ${EXTRAS_DIR}/android/res/drawable-ldpi/icon.png
convert ${EXTRAS_DIR}/icon.png -resize 48 ${EXTRAS_DIR}/android/res/drawable-mdpi/icon.png
convert ${EXTRAS_DIR}/icon.png -resize 72 ${EXTRAS_DIR}/android/res/drawable-hdpi/icon.png
convert ${EXTRAS_DIR}/icon.png -resize 96 ${EXTRAS_DIR}/android/res/drawable-xhdpi/icon.png
convert ${EXTRAS_DIR}/icon.png -resize 144 ${EXTRAS_DIR}/android/res/drawable-xhdpi/icon.png

