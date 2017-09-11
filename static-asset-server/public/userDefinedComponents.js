userDefinedComponents = {
  'hikersList': L.componentDefinitions.L_List.extend(function(base) {
      return {
        // The `init` method serves as the constructor.
        init: function(params) {
          params = params || {};
          base.init(params);

          console.log('%%%%%%% using usee defifned component!');

          this.listItemTemplate = params.listItemTemplate || `
            <li>
              <div>
                <img class="hiker-bio-image" src="{{imgUrlFull}}" />
              </div>
              
              {{firstName}} {{lastName}}
              

              <p>
                {{bio}}
              </p>
            </li>
          `;

          // this.data = { 
          //   listItems: null //expect []
          // };
          
          // //give it its own template not that of the superclass!!
          // this.compiledTemplate = templateUtils.compileTemplate(this.template); //this.Handlebars.compile(this.template);
          this.compiledListItemTemplate = L.templateUtils.compileTemplate(this.listItemTemplate);
        }  
      }
  })
}