echo "Pulling..."
git pull

echo "Stopping server..."
pm2 delete pm2.config.json

echo "Building..."
cd ./src/home/
./build.sh
cd ../../

pm2 start pm2.config.json

echo "Deployed!"
