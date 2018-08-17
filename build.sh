echo "🍏 install dependencies"
npm i

echo "🍏 clean dist folder"
rm -rf dist

echo "🍏 build parcel"
parcel build src/index.html

echo "🍏 build docker and run"
docker build -t ar . && docker run -it --rm -p 8080:80 ar
