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
              <li class="hike-calendar-item">
    
                <div>
                  <table>
                    <tr>
                      <td data-ui_string="Hike date">
                       
                      </td>
                      <td>
                        {{hikeDate}}
                      </td>
                    </tr>
                    <tr>
                      <td >
                       
                      </td>
                      <td>
                        {{hikeDate}}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Hike time:
                      </td>
                      <td>
                        {{hikeTime}}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Hike location:
                      </td>
                      <td>
                        {{hikeLocation}}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Hike Description:
                      </td>
                      <td>
                        {{hikeDescription}}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Hike Difficulty:
                      </td>
                      <td>
                        {{hikeDifficulty}}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Hike Leader:
                      </td>
                      <td>
                        {{hikeLeader}}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Hike notes:
                      </td>
                      <td>
                        {{notes}}
                      </td>
                    </tr>

                  </table>
                </div>


                <button class="rsvp-button">
                  RSVP
                </button>
              </li>
            `;

            // //give it its own template not that of the superclass!!
            this.compiledTemplate = L.templateUtils.compileTemplate(this.template); //this.Handlebars.compile(this.template);
            this.compiledListItemTemplate = L.templateUtils.compileTemplate(this.listItemTemplate);
          }  
        }
    })
}



