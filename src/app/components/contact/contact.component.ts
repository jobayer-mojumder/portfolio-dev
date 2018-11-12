import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var google; 
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        this.initMap();
    }

    ngAfterViewInit(){

        if($('#map').length) {
            google.maps.event.addDomListener(window, 'load', this.initMap);
        }
    }

    initMap() {
        var myLatlng = new google.maps.LatLng(40.773328,-73.960088);

        var mapOptions = {
            zoom: 14,
            center: myLatlng,
            mapTypeControl: false,
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false
        }

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'We are here!'
        });
    }

}
