src=$HOME/WorkSpace/fego-rn/
dest=`pwd`
# cp -rf $src/components $dest
# cp -rf $src/demo/ $dest/demo
rsync -rv --exclude=.git node_modules build Pods $src $dest
