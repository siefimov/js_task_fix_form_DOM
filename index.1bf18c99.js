function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var e,r=document.querySelectorAll(".field"),n=function(e){if(Array.isArray(e))return t(e)}(e=document.querySelectorAll(".field-text"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=n.map(function(t){return t.id});function a(t){var e=t.split(/(?=[A-Z])/).join(" ").toLowerCase();return e.charAt(0).toUpperCase()+e.slice(1)}r.forEach(function(t,e){var r=document.createElement("label"),i=n[e];r.className="field-label",r.setAttribute("for",o[e]),r.textContent=a(i.name),t.insertAdjacentElement("afterbegin",r)}),n.forEach(function(t){var e=a(t.name);t.setAttribute("placeholder",e)});
//# sourceMappingURL=index.1bf18c99.js.map