echo "Navigating to the be codebase"
cd packages/server-app
echo "Navigating to the be codebase success"

echo "Pull latest changes from the repo"
git pull
echo "Pull latest changes from the repo success"

echo "Install node modules"
npm install
echo "Install node modules success"

echo "Build the app"
npm run build
echo "Build is successful"

echo "start the app"
pm2 start pm2.json
echo "start the app success"

echo "save pm2 config"
pm2 save
echo "save pm2 config success"

echo "Navigate back to the main directory"
cd ../../