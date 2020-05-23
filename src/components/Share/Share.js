import jQuery from 'jquery';
import React, { Component } from 'react';
import './Share.css';

require('../../js/external/facebook.js')();

export default class Share extends Component {

    render() {

        var provider = this.props.provider;

        function share(e) {
            let shareUrl,
                popupWidth = screen.availWidth,
                popupHeight = screen.availHeight,
                canonicalUrl = jQuery('meta[property="og:url"]').attr('content'),
                title = jQuery('meta[property="og:title"]').attr('content'),
                tweet = jQuery('meta[name="twitter:title"]').attr('content'),
                description = jQuery('meta[property="og:description"]').attr('content'),
                image = jQuery('meta[property="og:image"]').attr('content');

            switch (provider) {
                case 'facebook':
                    FB.ui({// eslint-disable-line
                        method: 'feed',
                        name: title,
                        link: canonicalUrl,
                        picture: image,
                        description: description
                    });
                    break;
                case 'twitter':
                    shareUrl = "https://twitter.com/share?url=" + encodeURIComponent(canonicalUrl) + "&text=" + encodeURIComponent(tweet);
                    window.open(shareUrl, provider, "width="+ popupWidth +",height="+ popupHeight +",left=0,top=0");
                    break;
                default:void(0);
            }

            e.preventDefault();
        }

        return (
            <a className={"Share Share--" + this.props.provider} onClick={share}></a>
        );
    }
}
