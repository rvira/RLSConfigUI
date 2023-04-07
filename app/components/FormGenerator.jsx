import { SwaggerUIBundle, SwaggerUIStandalonePreset } from "swagger-ui-dist"
import { useEffect } from 'react';

function FormRender() {
    useEffect(() => {
        if (typeof window != "undefined") {
            
            const HideInfoUrlPartsPlugin = () => {
                return {
                  wrapComponents: {
                    InfoUrl: () => () => null,
                    ServiceWorkerRegistration: () => () => null
                  }
                }
              }
            
            const ui = SwaggerUIBundle({
                url: "../RLS.yml",
                dom_id: '#form-display',

                // to remove tryIt
                supportedSubmitMethods: ["post", "get"],
                presets: [
                    SwaggerUIBundle.presets.apis,
                    SwaggerUIStandalonePreset
                ],
                presets_config: {
                    SwaggerUIStandalonePreset: {
                        TopbarPlugin: false
                    }
                },
                plugins:[
                    SwaggerUIBundle.plugins.DownloadUrl,
                    HideInfoUrlPartsPlugin
                ],
                onComplete: function () {
                    let spec = ui.specSelectors.specJson().toJS();
                    let servers = spec.servers || [];
                    
                    ui.specActions.updateJsonSpec(spec);
                }
                
            })
        }
    }, [])
    return (
        <>            
            <div id="form-display"></div>
        </>
    )
}

function FormGenerator() {
    return (
        <FormRender />
    );
}

export default FormGenerator;
