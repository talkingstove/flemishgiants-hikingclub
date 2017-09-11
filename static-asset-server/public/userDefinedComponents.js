userDefinedComponents = {
  'hikersList': L.componentDefinitions.L_List.extend(function(base) {
      return {
        // The `init` method serves as the constructor.
        init: function(params) {
          params = params || {};
          base.init(params);

          this.template = params.template || `
            <ul data-data_binding="listItems" data-template_binding="compiledListItemTemplate">        
            </ul>
          `;

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

          // //give it its own template not that of the superclass!!
          this.compiledTemplate = L.templateUtils.compileTemplate(this.template); //this.Handlebars.compile(this.template);
          this.compiledListItemTemplate = L.templateUtils.compileTemplate(this.listItemTemplate);
        }  
      }
  }),
  'hikeCalendar': L.componentDefinitions.L_List.extend(function(base) {
        return {
          // The `init` method serves as the constructor.
          init: function(params) {
            params = params || {};
            base.init(params);

            this.template = params.template || `
              <ul data-data_binding="listItems" data-template_binding="compiledListItemTemplate">        
              </ul>
            `;

            this.listItemTemplate = params.listItemTemplate || `
              <li>
                this is a hike soon go!
              </li>
            `;

            // //give it its own template not that of the superclass!!
            this.compiledTemplate = L.templateUtils.compileTemplate(this.template); //this.Handlebars.compile(this.template);
            this.compiledListItemTemplate = L.templateUtils.compileTemplate(this.listItemTemplate);
          }  
        }
    })
}