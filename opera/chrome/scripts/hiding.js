/*
  Copyright 2015 Rocketship <http://rocketshipapps.com/>

  This program is free software: you can redistribute it and/or modify it under
  the terms of the GNU General Public License as published by the Free Software
  Foundation, either version 3 of the License, or (at your option) any later
  version.

  This program is distributed in the hope that it will be useful, but WITHOUT
  ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
  FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

  You should have received a copy of the GNU General Public License along with
  this program. If not, see <http://www.gnu.org/licenses/>.

  Authors (one per line):

    Brian Kennish <brian@rocketshipapps.com>
*/
const SELECTORS = {
  // Advance Publications
  'arstechnica.co.uk': '.instream-wrap, .side-ad, #article-footer',
  'arstechnica.com':
      '#daehtsam-da, #masthead + #pushdown-wrap, #msuk-wrapper, #outbrain-recs-wrap, .instream-wrap, .sponsored-rec, .side-ad, #article-footer',
  // Amazon.com
  'www.amazon.ca':
      'div[style="width:300px;height:280px;"], .displayAd, .zg_displayAd, #amsDetailRight, #ADPlaceholder, #sponsored-products-dp_feature_div, #AUI_A9AdsMiddleBoxTop',
  'www.amazon.co.uk':
      'div[style="width:300px;height:280px;"], .displayAd, .zg_displayAd, #amsDetailRight, #ADPlaceholder, #sponsored-products-dp_feature_div, #AUI_A9AdsMiddleBoxTop',
  'www.amazon.com':
      '#DAadrp, #ad, #nav-swmslot, #raw-search-desktop-advertising-tower-1, .pa-sp-container, div[style="width:300px;height:280px;"], .displayAd, .zg_displayAd, #amsDetailRight, #ADPlaceholder, #sponsored-products-dp_feature_div, #AUI_A9AdsMiddleBoxTop',
  // Business Insider
  'www.businessinsider.com':
      '.ad, .chartbeat, .continue-link, .ks-recommended, .sponsor, .subnav-container, .ad-subnav-container, .river-textonly, .rail-recommended, .right-ad, .ks-rr-taboola-video, .ks-rr-taboola-from-the-web, .jobs',
  'www.businessinsider.com.au': '#partner-offers, #follow_wrap',
  // BuzzFeed
  'www.buzzfeed.com': '#BF_WIDGET_10, .post2[style="background-color: #FDF6E5;"]',
  // eBay
  'www.motors.ebay.com': '#rtm_div_193',
  'pages.ebay.com': '#rtm_1658',
  'www.ebay.co.uk':
      '#rtm_html_194, #rtm_html_274, #rtm_html_275, #rtm_html_391, #rtm_html_566, #rtm_html_567, #rtm_html_569, #skyscrape, .RtmStyle, .sdcBox, .topBnrSc, div[style="margin-top: 15px; width: 160px; height: 615px; overflow: hidden; display: block;"], div[style="width: 300px; height: 265px; overflow: hidden; display: block;"], .beta-placement, #rtm_html_393, #rtm_html_987, #rtm_html_11575, #gf-mrecs-ads, .ft-btyle',
  'www.ebay.com':
      '#rtm_html_194, #rtm_html_391, #rtm_html_441, #rtm_html_569, #skyscrape, .RtmStyle, .al32, .fdad1, .ggtm, .mrec, .topBnrSc, div[style="margin-top: 15px; width: 160px; height: 600px; overflow: hidden; display: block;"], div[style="margin-top: 15px; width: 160px; height: 615px; overflow: hidden; display: block;"], .beta-placement, #rtm_html_393, #rtm_html_567, #rtm_html_987, #rtm_html_11575, #gf-mrecs-ads, .ft-btyle',
  'www.ebay.com.au': '#skyscrape, .RtmStyle, .beta-placement, #rtm_html_567, #rtm_html_393, #rtm_html_987, #rtm_html_11575, #gf-mrecs-ads, .ft-btyle',
  'www.ebay.ie': '#rtm_NB, #rtm_html_225, .beta-placement, #rtm_html_567, #rtm_html_393, #rtm_html_987, #rtm_html_11575, #gf-mrecs-ads, .ft-btyle',
  // Facebook
  'apps.facebook.com':
      'div[style="margin: 0px; width: 760px; height: 90px; text-align: center; vertical-align: middle;"]',
  'm.facebook.com':
      '#m_newsfeed_stream article[data-ft*="\\"ei\\":\\""], .aymlCoverFlow, .aymlNewCoverFlow[data-ft*="\\"is_sponsored\\":\\"1\\""], .pyml, .storyStream > ._6t2[data-sigil="marea"], .storyStream > .fullwidth._539p, .storyStream > article[id^="u_"]._676, .storyStream > article[id^="u_"].storyAggregation, [data-xt]',
  'touch.facebook.com':
      '.aymlCoverFlow, .aymlNewCoverFlow[data-ft*="\\"is_sponsored\\":\\"1\\""], .pyml, .storyStream > ._6t2[data-sigil="marea"], .storyStream > .fullwidth._539p, .storyStream > article[id^="u_"]._676, .storyStream > article[id^="u_"].storyAggregation, [data-xt]',
  'www.facebook.com':
      '#MessagingNetegoWrapper, #home_sponsor_nile, #home_stream > .uiUnifiedStory[data-ft*="\\"ei\\":\\""], #pagelet_ads_when_no_friend_list_suggestion, .-cx-PRIVATE-fbAdUnit__root, .-cx-PRIVATE-fbEmu__root, .-cx-PRIVATE-fbFacebarTypeaheadToken__sponsored, .-cx-PRIVATE-snowliftAds__root, .-cx-PRIVATE-spyml__story, .-cx-PUBLIC-fbAdUnit__root, ._24n, ._24o, ._3qj-, ._4u8, .adv, .ego_spo, .fbAdUnit, .fbEmu, .fbEmuBlock, .fbEmuComboList, .fbEmuEgo, .fbEmuEgoUnit, .fbEmuLink, .fbPhotoAdsCol, .fbTimelineSideAds, .fixedAux .pbm, .muffin.group, .ownsection[role="option"], [data-referrer="pagelet_side_ads"], [href^="/ads/adboard/"], a[ajaxify^="/ajax/emu/end.php?"], a[href^="/ajax/emu/end.php?"], div[class="ego_column _5qrt"], div[class="ego_column _8_9"], div[class="ego_column pagelet _5qrt _1snm"], div[class="ego_column pagelet _5qrt _y92 _1snm"], div[class="ego_column pagelet _5qrt _y92"], div[class="ego_column pagelet _5qrt"], div[class="ego_column pagelet _y92 _5qrt _1snm"], div[class="ego_column pagelet _y92 _5qrt"], div[class="ego_column pagelet _y92"], div[class="ego_column pagelet"], div[class="ego_column"], div[id^="sponsoredTickerStory_"], div[id^="substream_"] .userContentWrapper > ._1ifo, div[id^="substream_"] div[data-ft*="\"ei\":\""], div[id^="topnews_main_stream_"] div[id^="u_"][data-ft*="\\"ei\\":\\""], ul[id^="typeahead_list_"] > ._20e._6_k._55y_, #pagelet_ego_pane, [data-xt]',
  // Gawker Media
  'antiviral.gawker.com':
      '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'blackbag.gawker.com':
      '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'deadspin.com': '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'defamer.gawker.com':
      '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'dog.gawker.com':
      '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'domesticity.gawker.com':
      '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'fortressamerica.gawker.com':
      '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'gawker.com': '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'gizmodo.com':
      '.btyb_cat, .js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'internet.gawker.com':
      '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'io9.com':
      '#postTransitionOverlay, .js_promoted, #skyscraper, .ad-top, .contained-ad-container, .ad-bottom',
  'jalopnik.com':
      '#postTransitionOverlay, .js_promoted, #skyscraper, .ad-top, .contained-ad-container, .ad-bottom',
  'jezebel.com':
      '#postTransitionOverlay, .js_promoted, #skyscraper, .ad-top, .contained-ad-container, .ad-bottom',
  'justice.gawker.com':
      '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'kotaku.com':
      '#postTransitionOverlay, .ad, .js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'lifehacker.com':
      '#postTransitionOverlay, .js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'morningafter.gawker.com':
      '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'review.gawker.com':
      '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'sausage.gawker.com':
      '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'thevane.gawker.com':
      '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'tktk.gawker.com':
      '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'truestories.gawker.com':
      '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'valleywag.gawker.com':
      '.js_promoted, .ad-top, .contained-ad-container, .ad-bottom',
  'www.gizmodo.co.uk': '#interruptor, .interruptor, .commercial',
  'www.gizmodo.com.au': '#product-finder, .btyb_cat, .ad',
  // Google
  'm.youtube.com': 'a[onclick*="\"ping_url\":\"http://www.google.com/aclk?"]',
  'mail.google.com':
      '#\\:rr .nH[role="main"] .mq:first-child, #\\:rr > .nH > .nH[role="main"] > .aKB, #\\:rr > .nH > .nH[role="main"] > .nH > .nH > .AT[style], #\\:rr > .nH > div[role="main"] > .mq:last-child, .aeF .nH[role="main"] > .mq:last-child, .aeF > .nH > .nH[role="main"] > .aKB, .aeF > .nH > .nH[role="main"] > .afn:first-child + .mq, .aeF > .nH > .nH[role="main"] > .mq:first-child, .aeF > .nH > .nH[role="main"] > .nH > .nH > .AT[style], .aeF > .nH > .nH[role="main"] > .nH > .nH > .nH > .mq:last-child, .aeF > .nH > .nH[role="main"] > div + .mq, .c[style="margin: 0pt;"], .nH.PS, .nH.adC > .nH > .nH > .u5 > .azN, .oM, .rh > #ra, .ts[style="margin:0 0 12px;height:92px;width:100%"], .u4, .u9, .xz, .z0DeRc, [style="border: 1px solid rgb(0, 90, 136);"], [style="border: 1px solid rgb(145, 117, 77);"], [style="border: 1px solid rgb(241, 250, 248);"], [style="border: 1px solid rgb(51, 102, 153);"], [style="border: 1px solid rgb(51, 102, 204);"], a[href^="http://pagead2.googlesyndication.com/"]',
  'maps.google.com':
      '#mclip, .ads, .hotel-partner-item-sponsored, .hotel-price',
  'www.google.co.uk': '.GBTLFYRDM0, ._Ak',
  'www.google.com':
      'mbEnd[cellspacing="0"][cellpadding="0"], #rhs_block > #mbEnd, #tads + div + .c, #tads.c, #topstuff > #tads, #ad, #tadsc, .GC3LC41DERB + div[style="position: relative; height: 170px;"], .GGQPGYLCD5, .GGQPGYLCMCB, .GISRH3UDHB, .ad-active, .ads, .c[style="margin: 0pt;"], .nH.MC, .ts[style="margin:0 0 12px;height:92px;width:100%"], [style="border: 1px solid rgb(0, 90, 136);"], [style="border: 1px solid rgb(145, 117, 77);"], [style="border: 1px solid rgb(241, 250, 248);"], [style="border: 1px solid rgb(51, 102, 153);"], [style="border: 1px solid rgb(51, 102, 204);"], body > div[align]:first-child + style + table[cellpadding="0"][width="100%"] > tbody:only-child > tr:only-child > td:only-child, div[style^="height: 16px; font: bold 12px/16px"]',
  'www.google.com.au': '#mclip_control, ._Ak',
  'www.youtube.com':
      '#feed-pyv-container, #feedmodule-PRO, #homepage-chrome-side-promo, #premium-yva, #search-pva, #shelf-pyv-container, #video-masthead, #watch-branded-actions, #watch-buy-urls, #watch-channel-brand-div, .ad-container, .carousel-offer-url-container, .list-view[style="margin: 7px 0pt;"], .promoted-videos, .searchView.list-view, .watch-extra-info-column, .watch-extra-info-right, a[href^="http://www.youtube.com/cthru?"], a[href^="https://www.youtube.com/cthru?"], .ad-div div, #watch-channel-brand-div',
  // Mashable
  'mashable.com': '.ad, .header-banner, .pga, .box970, .ad_container',
  // Microsoft
  'www.bing.com': '#zune_upsell, .partnerLinks, .b_ad',
  // reddit
  'www.reddit.com': '#siteTable_organic, .promotedlink',
  // Twitter
  'twitter.com':
      '.promoted-account, .promoted-trend, .promoted-tweet, .promotion, .stream-item[data-item-type="tweet"][data-item-id*=":"], .stream-tweet[impression_id][label="promoted"]',
  // Verizon
  'massively.com': '#topleader-wrap',
  'search.aol.ca': '.SLL, .WOL',
  'search.aol.co.uk': '.PMB, .SLL, .WOL',
  'search.aol.com':
      '#maincontent + script + div[class] > style + script + h3[class], #r, .MSL + script + script + div[class] > style + script + h3[class], .PMB, .RHRSLL, .RHRSLLwseboF, .SLL, .SLLwseboF, .WOL, .WOL2, ul[content="SLMP"], ul[content="SLMS"]',
  'search.aol.in': '.SLL',
  'switched.com': '#topleader-wrap, .medrect',
  'techcrunch.com':
      '#post_unit_medrec, .ad-top-mobile, .header-ad, .river-block-native-ad, .native-ad-mobile, .ad-unit, .ad-cluster-container, .ad-300x250, .l-sidebar li:last-child, .ad-sponsored-aside, .fmvps-player-ad-ribbon',
  'us.wow.com': '.side-ad, .googleAFCAds',
  'www.aolsearch.com': '.SLL',
  'www.engadget.com':
      '#outerslice, .ad, .skyscraper, .sponsoredcontent, .sponsor-logo-post, .rail-ad > div:first-child > div:first-child, .rail-ad aside:nth-of-type(2), .rail-asl-line, #adSkyScraper',
  'www.huffingtonpost.co.uk':
      '#modulous_right_rail_edit_promo, #modulous_sponsorship_2, .ad_wrapper, .ad_wrapper_, .ad_wrapper_top, #all_sponsored_posts_page_1_wrapper, #ad_deal_lower_left_wrapper, #ad_lower_right_commercials_wrapper, .ad_store, #ad_most_pop_234x60_req_wrapper',
  'www.huffingtonpost.com':
      '#page-header, #partner_box, .RHRSLL, .contin_below, .hp-ss-leaderboard, .linked_sponsored_entry, .presented-by, .right_rail_edit_promo, a[href*=".atwola.com/"], .ad_wrapper, .ad_wrapper_, .ad_wrapper_top, #all_sponsored_posts_page_1_wrapper, #ad_deal_lower_left_wrapper, #ad_lower_right_commercials_wrapper, .ad_store, #ad_most_pop_234x60_req_wrapper',
  'www.joystiq.com':
      '#medrect, #medrectrb, #top-leader, #topleader-wrap, .ad, .medrect',
  'www.luxist.com': '#topleader-wrap, .medrect',
  'www.tuaw.com': '.medrec, .medrect',
  'www.wow.com': '#topleader-wrap, .SLL, .medrect',
  // Vox Media
  'www.sbnation.com': '.harmony-sponsorship',
  'www.theverge.com':
      '#fishtank, .-ad, .harmony-sponsorship, .m-feature__intro > aside, .vert300, .m-ad, .m-review__intro > aside',
  // Yahoo!
  'answers.yahoo.com': '#ya-darla-LREC, #ya-qpage-textads',
  'au.news.yahoo.com':
      '.acc-moneyhound, .collection-sponsored, .moneyhound, .northAd, .y7-advertisement',
  'au.yahoo.com':
      '#y708-windowshade, #my-adsMAST, #my-adsLREC, #my-adsTL1, #my-adsLREC2, .js-stream-featured-ad, .y7sponsoredlist',
  'autos.yahoo.com':
      '#yatadfin, #yatadfinbd, #yatadlrec, #yatadoem, #yatadoembd, .yatAdInsuranceFooter, .yatysm-y',
  'biz.yahoo.com': 'table[bgcolor="white"][width="100%"]',
  'celebrity.yahoo.com': '.ad-wrap, .yom-ad, .rmx-ad, .media-native-ad',
  'cricket.yahoo.com': '#video-branding, .yom-ad',
  'dir.yahoo.com': 'td[width="215"]',
  'eurosport.yahoo.com': '.yom-sports-betting',
  'finance.yahoo.com':
      '#MediaFeaturedListEditorial, #mediabankrate_container, #yfi_ad_FB2, #yfi_ad_cl, .yfi_ad_s, .yom-ysmcm, div[style="height:265px; width:300px;margin:0pt auto;"], div[style="min-height:265px; _height:265px; width:300px;margin:0pt auto;"], .yom-ad, .rmx-ad, #td-applet-ads_container',
  'games.yahoo.com':
      '.md.links, #TopAd, .darla-wrapper, .darla-ad, .wrap-stream_ad',
  'groups.yahoo.com': '.yg-mbad-row, .yg-mb',
  'homes.yahoo.com': '.ad-wrap, .yom-ad, .rmx-ad, .media-native-ad',
  'images.search.yahoo.com':
      '#right > div > .searchRightMiddle + div[id]:last-child, #right > div > .searchRightTop + [id]:last-child, #right > div:first-child:last-child > [id]:first-child:last-child, div[id^="wp_bannerize-"], div[id^="yui_"] > span > ul[class]:first-child:last-child > li[class], div[id^="yui_"] > ul > .res[data-bg-link^="http://r.search.yahoo.com/_ylt="] + * div[class^="pla"], .ads',
  'local.yahoo.com': '#yls-dt-ysm, .yls-rs-paid, #dmRosAdWrapper-East',
  'maps.yahoo.com': '#ymap_main_footer, .listing > .ysm, .yui3-widget-stacked',
  'movies.yahoo.com':
      '#banner, #customModule, .md.links, .results[bgcolor="#ECF5FA"], .right-module',
  'music.yahoo.com':
      '#YMusicRegion_T2_R2C2, #YMusicRegion_T3_R2C2_R1, #YMusicRegion_TN1_R2C2_R1, #lrec, #lrecTop',
  'news.yahoo.com':
      '#MediaFeaturedListEditorial, #darla, #mw-ysm-cm_2-container, #north, .yom-ysmcm, .ad-wrap, .yom-ad, .rmx-ad, .media-native-ad',
  'omg.yahoo.com': '#omg-lrec',
  'realestate.yahoo.com': '#pdp-ysm, #srp-ysm',
  'search.yahoo.com':
      '#bpla, #cols > #right > ol[class] > .first > .dd[style="padding: 10px !important;border: 1px solid #ededed;"], #cols > #right ol[class] > .first > .dd[style="background-color:#FFF;border: 1px solid #e2e2e6; margin-top:0;"], #doc #cols #right #east, #east, #left > #main > div[id^="yui_"], #left > #main > div[id^="yui_"][class] > ul[class] > li[class], #left > #main > div[id^="yui_"][class]:first-child > div[class]:last-child, #left > #main > ol[class] > li[id] > .dd > .layoutMiddle, #main .dd .layoutCenter .compDlink, #main .dd .layoutCenter > .compDlink, #main .dd[style="cursor: pointer;"] > .layoutMiddle, #main > .reg > li[id^="yui_"][data-bid] > [data-bid], #main > div + div > style + * li > .dd > div[class], #main > div ol[class] > :first-child:last-child > li > .dd > :first-child:last-child > div[class], #main > div ol[class] li[id] > .dd > div + * > div, #main > div[id^="yui_"] > ul > .res, #main > div[id^="yui_"].rVfes:first-child, #main > div[id^="yui_"].rVfes:first-child + #web + div[id^="yui_"].rVfes, #main > div[id^="yui_"][class][data-bk][data-bns]:first-child, #main > div[style="background-color: rgb(250, 250, 255);"], #main > noscript + div[id^="yui_"][class][data-bk][data-bns="Yahoo"], #main > noscript + div[id^="yui_"][class][data-bk][data-bns="Yahoo"] + #web + div[id^="yui_"][class][data-bk][data-bns="Yahoo"], #main > style:first-child + * + #web + style + * > ol[class]:first-child:last-child, #main > style:first-child + * > ol[class]:first-child:last-child, #r-e, #r-n, #r-s, #right .dd .mb-11 + .compList, #right .dd > .layoutMiddle, #right .dd[style="cursor: pointer;"] > .layoutMiddle, #right .dd[style^="background-color:#FFF;border-color:#FFF;padding:"] .compList, #right .first > div[style="background-color:#fafaff;border-color:#FAFAFF;padding:4px 10px 12px;"], #right .reg > li[id^="yui_"][data-bid] > [data-bid], #right .res, #right > .searchRightMiddle + div[id]:last-child, #right > .searchRightTop + div[id]:last-child, #right > div > .searchRightMiddle + div[id]:last-child, #right > div > .searchRightTop + [id]:last-child, #right > div > style + * li .dd > div[class], #right > div ol[class] li > :first-child:last-child > .dd > :first-child:last-child > div[class]:first-child:last-child, #right > div:first-child:last-child > [id]:first-child:last-child, #right > div[class] > ol[class] .dd div[class] > ul > li[class^="mt-"], #right > div[class] ol[class] li[id] .dd > div + * > div[class], #right > div[id] > div[class] > div[class] > h2[class]:first-child + ul[class]:last-child > li[class], #right > span > div[id] > div[class] div[class] > span > ul[class]:last-child > li[class], #right [class][data-bk][data-bns], #right div.dd[style^="background-color:#FFF"] div > ul > li[class^="mt-"], #right div[style="background-color:#fafaff;border-color:#FAFAFF;padding:4px 10px 12px;"], #right li[id^="yui_"] .dd > .layoutMiddle, #right ol li[id^="yui_"] > .dd > .layoutMiddle, #sec-col, #ysch #doc #bd #results #cols #left #main .ads, #ysch #doc #bd #results #cols #left #main .ads .more-sponsors, #ysch #doc #bd #results #cols #left #main .ads .spns, #ysch #doc #bd #results #cols #right #east .ads, .ads, .bgclickable, .eadlast, .has-sma-box, .horiz, .last > div[class][data-bid] > div[class] > ul[class] > li > span > a, .promo-res, .sponsor-dd, .title > a[style="color:#efc439 !important; font-size:13px;font-weight: normal;"], .vert-ad-ttl + * > .eca[target="_blank"][href^="http://r.search.yahoo.com/_ylt="], a[href="http://help.yahoo.com/l/us/yahoo/search/basics/basics-03.html"], a[href^="http://help.yahoo.com/l/us/yahoo/search/basics/basics-03.html"], a[href^="http://r.search.yahoo.com/_ylt="][href*=";_ylu="][href*=".r.msn.com"], a[href^="http://r.search.yahoo.com/_ylt="][href*=";_ylu="][href*="beap.gemini.yahoo.com"], a[href^="https://search.yahoo.com/search/ads;"], div[id^="wp_bannerize-"], div[id^="yui_"] > span > ul[class]:first-child:last-child > li[class], div[id^="yui_"] > ul > .res[data-bg-link^="http://r.search.yahoo.com/_ylt="] + * div[class^="pla"], li[id^="yui_"] > div[data-bns][data-bk][style="cursor: pointer;"] > div[class], ul > .res[data-bg-link^="http://r.search.yahoo.com/_ylt="], .eza9f',
  'shine.yahoo.com': '#ylf-ysm-side',
  'shopping.yahoo.com': '.shmod-ysm',
  'travel.yahoo.com':
      '#ytrv-ysm-hotels, #ytrv-ysm-north, #ytrv-ysm-south, #ytrvtrt, .niftyoffst[style="background-color: #CECECE; padding: 0px 2px 0px;"], .spon, .tgl-block, .ysmcm, .ytrv-lrec',
  'uk.news.yahoo.com': '.yom-ad, .rmx-ad, .media-native-ad',
  'uk.sports.yahoo.com': '.yom-ad, .rmx-ad, .media-native-ad, .classickick',
  'uk.yahoo.com':
      '#my-adsMAST, #my-adsLREC, #my-adsTL1, #my-adsLREC2, .js-stream-featured-ad, .y7sponsoredlist',
  'us-mg0.mail.yahoo.com':
      '#MIP4, #MNW, #SKY, #modal-upsell, #northbanner, #nwPane, #slot_LREC, #slot_MB, #slot_REC, #swPane, #tgtMNW, .avLogo, .left_mb, .mb > .tbl, div#msg-list .list-view .ml-bg:not(.list-view-item-container), #slot_TL1, .mb-list-ad',
  'us-mg1.mail.yahoo.com':
      '#MIP4, #MNW, #SKY, #modal-upsell, #northbanner, #nwPane, #slot_LREC, #slot_MB, #slot_REC, #swPane, #tgtMNW, .avLogo, .left_mb, .mb > .tbl, div#msg-list .list-view .ml-bg:not(.list-view-item-container), #slot_TL1, .mb-list-ad',
  'us-mg2.mail.yahoo.com':
      '#MIP4, #MNW, #SKY, #modal-upsell, #northbanner, #nwPane, #slot_LREC, #slot_MB, #slot_REC, #swPane, #tgtMNW, .avLogo, .left_mb, .mb > .tbl, div#msg-list .list-view .ml-bg:not(.list-view-item-container), #slot_TL1, .mb-list-ad',
  'us-mg3.mail.yahoo.com':
      '#MIP4, #MNW, #SKY, #modal-upsell, #northbanner, #nwPane, #slot_LREC, #slot_MB, #slot_REC, #swPane, #tgtMNW, .avLogo, .left_mb, .mb > .tbl, div#msg-list .list-view .ml-bg:not(.list-view-item-container), #slot_TL1, .mb-list-ad',
  'us-mg4.mail.yahoo.com':
      '#MIP4, #MNW, #SKY, #modal-upsell, #northbanner, #nwPane, #slot_LREC, #slot_MB, #slot_REC, #swPane, #tgtMNW, .avLogo, .left_mb, .mb > .tbl, div#msg-list .list-view .ml-bg:not(.list-view-item-container), #slot_TL1, .mb-list-ad',
  'us-mg5.mail.yahoo.com':
      '#MIP4, #MNW, #SKY, #modal-upsell, #northbanner, #nwPane, #slot_LREC, #slot_MB, #slot_REC, #swPane, #tgtMNW, .avLogo, .left_mb, .mb > .tbl, div#msg-list .list-view .ml-bg:not(.list-view-item-container), #slot_TL1, .mb-list-ad',
  'us-mg6.mail.yahoo.com':
      '#MIP4, #MNW, #SKY, #modal-upsell, #northbanner, #nwPane, #slot_LREC, #slot_MB, #slot_REC, #swPane, #tgtMNW, .avLogo, .left_mb, .mb > .tbl, div#msg-list .list-view .ml-bg:not(.list-view-item-container), #slot_TL1, .mb-list-ad',
  'www.yahoo.com':
      '#LREC, #MREC, #YSLUG, #ad, #banner, #boxLREC, #darla-ad__LREC, #darla-ad__LREC2, #default-p_24457750, #eyebrow > #ypromo, #genie-widgetgroup, #leftGutter, #lrec2, #lrec_mod, #marketplace, #mbAds, #mw-ysm-cm, #my-promo-hover, #paas-lrec, #paas-mrec, #promo_links_list, #rec, #reg-promos, #rightGutter, #sponsor, #sponsored, #theMNWAd, #tiles-container > #row-2[style="height: 389.613px; padding-bottom: 10px;"], #u_2588582-p, #y708-ad-lrec1, #y708-sponmid, #y_provider_promo, #ya-center-rail > [id^="ya-q-"][id$="-textads"], #yahooPN_CM, #yahoovideo_ysmlinks, #yfi_pf_ysm, #yfi_ysm, #ygmapromo, #yh-ysm, #yl_pf_ysm, #ylf-ysm, #ymh-invitational-recs, #yn-darla2, #yn-gmy-promo-answers, #yn-gmy-promo-groups, #yschsec, .ad, .ad-active, .ads, .astro-promo, .fpad, .lrec, .marketplace, .mballads, .more-sponsors, .sharing-toolbar, .spns, .spon.clearfix, .spons, .wdpa1, .y7-breakout-bracket, .y708-ad-eyebrow, .y708-commpartners, .y708-promo-middle, .y7moneyhound, .y7partners, .ya-LDRB, .ya-darla-LREC, .yad, .yad-cpa, .yschspns, .ysm-cont, .ysptblbdr3, [data-ad-enhanced="card"], [data-ad-enhanced="pencil"], [data-ad-enhanced="text"], a[href^="https://beap.adss.yahoo.com/"], div[data-type="ADS"], div[id^="tile-A"][data-beacon-url^="https://beap.gemini.yahoo.com/mbcsc?"], div[id^="tile-mb-"], li[data-beacon^="https://beap.adss.yahoo.com/"], li[data-beacon^="https://beap.gemini.yahoo.com/"], li[id^="ad-"], .ad-tl1, .ad-wrap, .yom-ad, .rmx-ad, .darla-container, .moneyball-ad, .js-stream-ad'
};