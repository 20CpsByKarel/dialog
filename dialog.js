function showAgeVerification(){if(localStorage.getItem('ageVerified')){return}
const language=upgates.language;let modalTitle="Ověření věku";let modalBodyText="Bylo vám již 18 let?";let yesButtonText="Ano";let noButtonText="Ne";if(language==='en'||language==='tl'){modalTitle="Age Verification";modalBodyText="Are you at least 18 years old?";yesButtonText="Yes";noButtonText="No"}
const modalHTML=`
        <div class="modal-overlay" style="display: block; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1050;">
            <div class="modal-dialog" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90%; max-width: 500px;">  
                <div class="modal-content" style="background-color: #f8f9fa; border: 2px solid #007bff; border-radius: 10px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);">
                    <div class="modal-header" style="border-bottom: 2px solid #007bff;">
                        <h5 class="modal-title" id="ageVerificationModalLabel">${modalTitle}</h5>
                    </div>
                    <div class="modal-body" style="font-size: 18px; text-align: center;">
                        <p>${modalBodyText}</p>
                    </div>
                    <div class="modal-footer" style="justify-content: center; padding-bottom:10px;">
                        <button type="button" class="btn btn-secondary mr-2" id="ageVerificationNo">${noButtonText}</button>
                        <button type="button" class="btn bg-pr text-white" id="ageVerificationYes">${yesButtonText}</button>
                    </div>
                </div>
            </div>
        </div>
    `;document.body.insertAdjacentHTML('beforeend',modalHTML);const modalOverlay=document.querySelector('.modal-overlay');modalOverlay.style.display="block";document.getElementById('ageVerificationYes').onclick=function(){localStorage.setItem('ageVerified',!0);modalOverlay.style.display="none";modalOverlay.remove()};document.getElementById('ageVerificationNo').onclick=function(){const currentUrl=window.location.href;const newUrl=currentUrl.split('/')[0]+'/'+language;window.location.href=newUrl}}
const breadcrumbList=document.querySelector('ol[itemtype="http://schema.org/BreadcrumbList"]');if(breadcrumbList){const listItems=breadcrumbList.querySelectorAll('li');for(const item of listItems){if(item.textContent.includes("Alcoholic")||item.textContent.includes("Alkohol")){showAgeVerification();break}}}
