//header.js


//alert(1) //use this to see if the js file is linked to your html file

class myHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = ` <!--the character after the = sign is not a quotation mark sign, but a backtick-->

            <h1>Welcome to Yongshi Sun's portfolio</h1>

            <!-- Tabs for bigger resolution screens-->
			<ul class = "tabs">
				<a href="https://yongshisun.github.io/code510/portfolio/index">(A[b[o[u[t[M[e===</a>
				<a class="slideleft" href="https://yongshisun.github.io/code510/portfolio/art">A[r[t[W[o[r[k===</a>
				<a class="slideleft" href="https://yongshisun.github.io/code510/portfolio/experiences">E[x[p[e[r[i[e[n[c[e===</a>
				<a class="slideleft" href="https://yongshisun.github.io/code510/portfolio/projects">P[r[o[j[e[c[t[s===</a>
				<a class="slideleft" href="https://yongshisun.github.io/code510/portfolio/orgs">O[r[g[a[n[i[z[a[t[i[o[n[s)</a>
			</ul>

			<!-- Tabs for mobile resolution screens-->
			<ul class = "small_tabs">
				<a href="https://yongshisun.github.io/code510/portfolio/index">(A[b[o[u[t[M[e)</a>
				<a class="slideleft" href="https://yongshisun.github.io/code510/portfolio/art">(A[r[t[W[o[r[k)</a>
				<a class="slideleft" href="https://yongshisun.github.io/code510/portfolio/experiences">(E[x[p[e[r[i[e[n[c[e)</a>
				<a class="slideleft" href="https://yongshisun.github.io/code510/portfolio/projects">(P[r[o[j[e[c[t[s)</a>
				<a class="slideleft" href="https://yongshisun.github.io/code510/portfolio/orgs">(O[r[g[a[n[i[z[a[t[i[o[n[s)</a>
			</ul>
        `
    }
}

//everytime html comes across a tag called <my-header></my-header>, it will load in whatever is in the class myHeader(aka HTML in this file)
customElements.define('my-header', myHeader)
