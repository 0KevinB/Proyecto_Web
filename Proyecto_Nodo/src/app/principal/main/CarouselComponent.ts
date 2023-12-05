import { Component, OnInit } from '@angular/core';
import { bootstrap } from './carrousel.component';


@Component({
    selector: 'app-carousel',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'] // Asegúrate de que este archivo contenga las reglas de estilo CSS
})
export class CarouselComponent implements OnInit {

    ngOnInit() {
        this.initializeCarousel();
    }

    private initializeCarousel() {
        document.addEventListener('DOMContentLoaded', function () {
            var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleControls'), {
                interval: false
            });

            myCarousel._element.addEventListener('slide.bs.carousel', function (event: { relatedTarget: any; direction: any; }) {
                var activeItem = event.relatedTarget;
                var direction = event.direction;

                // Elimina las clases 'carousel-slide', 'next' y 'prev' de todos los elementos
                activeItem.parentElement.querySelectorAll('.carousel-item').forEach(function (item) {
                    item.classList.remove('carousel-slide', 'next', 'prev');
                });

                // Agrega las clases apropiadas al elemento activo y al próximo elemento
                activeItem.classList.add('carousel-slide');
                var nextItem = (direction === 'next') ? activeItem.nextElementSibling : activeItem.previousElementSibling;
                if (nextItem) {
                    nextItem.classList.add(direction);
                }
            });
        });
    }
}
