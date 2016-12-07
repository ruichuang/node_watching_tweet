var streamKeys = {
    STREAM_KEYS: [{
        key: 'Donald Trump'
    },{
    	key: 'Trump'
    }]
};

streamKeys.getStreamKEYs = function() {
    var keys = [];

    this.STREAM_KEYS.forEach(function(el, i) {
        keys.push(el.key);
    });

    return keys.toString();
}

module.exports = streamKeys;