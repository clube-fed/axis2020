//after the page loads

function continueToLoadListings() {

    $j("#relListings").removeClass("grid");
    $j("#relListings").removeClass("list");
    templateToUse = "";
    try { templateToUse = listingTemplate; } catch (e) { }
    if (loadingAsMobile) {
        $j("#relListingViewSwitch li").removeClass("selected");
        $j("#relListingViewSwitch .gridView").addClass("selected");
    }

    try {
        switch ($j("#relListingViewSwitch .selected").attr("view")) {
            case "grid":
                templateToUse = gridViewTemplate;
                $j("#relListings").addClass("grid");
                heroSize = "mh206_mw250";
                break;
            case "list":
                templateToUse = listViewTemplate;
                $j("#relListings").addClass("list");
                heroSize = "mh187_mw275";
                break;
            case "calendar":
                templateToUse = calendarViewTemplate;
                $j("#relListings").addClass("calendar");
                loadCalendarView();
                if (events.OnListingsFinishedLoading !== "") eval(events.OnListingsFinishedLoading);
                return;
                break;
            default:
                templateToUse = listViewTemplate;
                $j("#relListings").addClass("list");
                heroSize = "mh187_mw275";
        }
    } catch (e) { }

    if (loadingAsMobile) {
        heroSize = "";
    }

    $j("#relListings").html("");

    var evaled = eval("(" + listings + ")");
    console.log(evaled);

    if (DoListingShuffle == true) { ListingShuffle(evaled); }

    $j.each(evaled, function (key, Listing) {
        if (events.OnBeforeListingLoaded !== "") eval(events.OnBeforeListingLoaded);
        var listingContent = doListingReplaces(Listing);
        var filterArr = [];
        for(i=0; i<Listing.Attributes.length; i++) {
            var filterStr = Listing.Attributes[i].Attribute;
            filterArr.push(filterStr);
        }
        console.log(filterArr);
        console.log(JSON.stringify(filterArr));
        var listing = $j("<div/>").addClass("relSingleListing").attr("id", "relSingleListing" + Listing.ListingID).attr("listingid", Listing.ListingID).attr("data-filters", JSON.stringify(filterArr)).html(listingContent);
        if (!loadingAsMobile && admin > 0) {
            var editLink = $j("<div/>").addClass("editLink").html("Edit").click(function () { showEditDialog(Listing.ListingID); });
            editLink.appendTo(listing);
        }
        //        if (Listing.BookedforMe.length > 0) {
        //            var bookEm = $j("<div/>").addClass("bookedIndicator").html("Booked");
        //            bookEm.appendTo(listing);
        //        }

        if (!loadingAsMobile) listing.hover(function () { $j(this).addClass("hover"); }, function () { $j(this).removeClass("hover"); });
        listing.find(".contactCardLink").click(function () {
            showContactCard($j(this), Listing, $j(this).attr("contactid"));
        });

        listing.find(".relImagesLightbox").click(function () {
            showImagesLighbox($j(this), Listing);
        });
        var isActive = true;
        if (Listing.ExpireDate) {
            if (new Date(Listing.ExpireDate) < Date.now()) {
                listing.removeClass("inactive").addClass("inactive").addClass("expired");
                isActive = false;
            }
        }

        if (Listing.ListingDate) {
            if (new Date(Listing.ListingDate) > Date.now()) {
                listing.removeClass("inactive").addClass("inactive").addClass("invalid");
                isActive = false;
            }
        }

        if (isActive || admin > 0) {
            listing.appendTo("#relListings");
        }

        //if ($j("#requestInfo").length > 0) {
        //var mainContact = getMainContact(Listing);
        //if (mainContact) {
        //if (mainContact.Email != "") $j("#requestInfo").show();
        //  }
        //}  

        if (events.OnListingFinishedLoading !== "") eval(events.OnListingFinishedLoading);

        if (templateToUse.indexOf("##IMAGESLIDER##") !== -1 && events.OnListingFinishedLoading.indexOf(".nivoSlider(") === -1) {
            try {
                if ($j("#slider_" + Listing.ListingID).length > 0) $j("#slider_" + Listing.ListingID).nivoSlider();
            } catch(e) {
                if ($("#slider_" + Listing.ListingID).length > 0) $("#slider_" + Listing.ListingID).nivoSlider();
            }            
        }

        if (IsCenetic == true) {
            $j(listing).attr({ "unittype": Listing.CeneticUnitType, "unitnum": Listing.CeneticUnitNum, "templateid": Listing.CeneticTemplateId });
            listing.find(".btnCheckAvail").click(function () { RequestAvailability($j(listing).attr("listingid"), $j(listing).attr("unittype"), $j(listing).attr("unitnum")); });
            if (IsDiplomatUp == false) { listing.find(".btnCheckAvail").hide(); }
        }

    });

    var heros = $j("#relListings").find(".heroShotImg").load(function () {
        var photoCount = $j(this).attr("photos");
        $j(this).parent().width($j(this).width());
        $j(this).parent().height($j(this).height());
        $j(this).parent().css("position", "relative");
        var div = $j("<div/>").addClass("photoCount").html(photoCount + " photo" + ((photoCount == 1) ? "" : "s")).appendTo($j(this).parent());
        if ($j(this).attr("hasvideo") === "true") div.html(div.html() + "<span title=\"Has Video\" class=\"hasVideo\"></span>");
        //div.click(function () { showImagesLighbox($j(this), Listing); })
    });

    if (events.OnListingsFinishedLoading !== "") eval(events.OnListingsFinishedLoading);
}