echo "Navigating to the be codebase"
cd packages/client-app
echo "Navigating to the be codebase success"

echo "Pull latest changes from the repo"
git pull
echo "Pull latest changes from the repo success"

echo "start the app"
pm2 start pm2.json
echo "start the app success"

echo "save pm2 config"
pm2 save
echo "save pm2 config success"

echo "you can start access the app on http://13.127.148.23:5000/" 

echo "Navigate back to the main directory"
cd ../../