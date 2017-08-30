function drawTree(height) {
   if ( height > 0 ) {
        var tree = '';
        for ( var i = 0; i < height; i++ ) {
            console.log(tree += '*');
        }
    } else {
        throw {
            name: 'Bad value',
            message: "Tree's height must be 1 or more"
        };
    }
}

function christmasTree (treeHeight) {
    if ( treeHeight > 0 ) {
        for (var i = 1; i <= treeHeight; i++) {
            var tree = '',
                margin = ''; 
            for( var j = 1; j <= 2 * i - 1; j++) {
                tree += '*';
            }
            for(var k = 1; k <=(2 * treeHeight - 1 - tree.length) / 2; k++) {
                margin += ' ';
            }
            console.log(margin + tree + margin);   
        }
    } else {
        throw {
            name: 'Bad value',
            message: "Tree's height must be 1 or more"
        };
    }
}

try {
    drawTree(6);
    christmasTree(7);
    christmasTree(-1);
} catch (e) {
    alert(e.name + ": " + e.message);
}