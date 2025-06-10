import { AfterViewInit, Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent ,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
constructor(private router: Router) {}

navigateToForm() {
  this.router.navigate(['/resume-form']);
}
  ngAfterViewInit(): void {
    const span = document.querySelector('.up') as HTMLElement;

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 300) {
        span.classList.add('show');
      } else {
        span.classList.remove('show');
      }
    });

    span.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
}
