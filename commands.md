#### Run

docker run \
  --publish 8001:4567 \
  --volume "$(pwd):/plugin" \
  trmnl/trmnlp serve