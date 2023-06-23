import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';


@Injectable({
   providedIn: 'root'
})
export class PrivateGuard implements CanActivate {

   constructor(private router: Router) { }

   canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | UrlTree {
      let url: string = state.url;

      const tree: UrlTree = router.parseUrl('/team;id=33');
      const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
      const s: UrlSegment[] = g.segments;
      s[0].path; // returns 'team'



      let next_url = next.firstChild;
      return this.checkLogin(url, next_url.path);
   }

   checkLogin(url: string, next_url): true | UrlTree {
      console.log("Url: " + url)
      let val: string = localStorage.getItem('isUserLoggedIn');

      if (val != null && val == "true") {
         if (url == "/login") {
            //this.router.parseUrl(next_url);
            console.log(next_url);
            this.router.navigateByUrl(next_url);
         }
         else
            return true;
      } else {
         return this.router.parseUrl('/login');
      }
   }
}