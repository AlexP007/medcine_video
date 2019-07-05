
!function(){

    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";

    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}();
!function(){

    function onPlayerReady(event) {
        event.target.playVideo();
    }

    $('[data-video]').on('click',
        (e) => {
        let elt = $(e.target).parent('div');
        change(elt);
    } )

    function change(parent) {

        $('.video-container').each(
            (_,elt) => {
                $(elt).html("<img src=" + $(elt).attr('data-img') +  "><div data-attr='video-container'></div>")
            }
        );

        parent.children('img').remove();

        const id = parent.attr('data-video');
        const container = parent.children('[data-attr=video-container]')[0];
        onYouTubeIframeAPIReady(container, id)
    }

    function onYouTubeIframeAPIReady(container, id) {
        new YT.Player(container, {
            height: '100%',
            width: '100%',
            videoId: id,
            events: {
                'onReady': onPlayerReady,
            }
        });
    }
}();