(globalThis.webpackJsonp=globalThis.webpackJsonp||[]).push([[6],{1015:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return C}));var s,r=t(0),n=t.n(r),i=t(780),c=t.n(i),o=t(3),l=t(1),h=t(136),u=t(8),p=t(99),m=t(286),y=t(18),d=t(28),b=t(51),k=t(2);function P(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}!function(e){e.Passphrase="passphrase",e.PassphraseConfirm="passphrase_confirm",e.ShowKey="show_key",e.KeepItSafe="keep_it_safe",e.BackingUp="backing_up",e.Done="done",e.OptOutConfirm="opt_out_confirm"}(s||(s={}));class C extends n.a.PureComponent{constructor(e){super(e),P(this,"keyBackupInfo",void 0),P(this,"recoveryKeyNode",Object(r.createRef)()),P(this,"passphraseField",Object(r.createRef)()),P(this,"onCopyClick",()=>{Object(p.b)(this.recoveryKeyNode.current)&&this.setState({copied:!0,phase:s.KeepItSafe})}),P(this,"onDownloadClick",()=>{const e=new Blob([this.keyBackupInfo.recovery_key],{type:"text/plain;charset=us-ascii"});c.a.saveAs(e,"security-key.txt"),this.setState({downloaded:!0,phase:s.KeepItSafe})}),P(this,"createBackup",async()=>{const{secureSecretStorage:e}=this.state;let a;this.setState({phase:s.BackingUp,error:null});try{e?await Object(h.b)(async()=>{a=await o.a.get().prepareKeyBackupVersion(null,{secureSecretStorage:!0}),a=await o.a.get().createKeyBackupVersion(a)}):a=await o.a.get().createKeyBackupVersion(this.keyBackupInfo),await o.a.get().scheduleAllGroupSessionsForBackup(),this.setState({phase:s.Done})}catch(e){k.a.error("Error creating key backup",e),a&&o.a.get().deleteKeyBackupVersion(a.version),this.setState({error:e})}}),P(this,"onCancel",()=>{this.props.onFinished(!1)}),P(this,"onDone",()=>{this.props.onFinished(!0)}),P(this,"onSetUpClick",()=>{this.setState({phase:s.Passphrase})}),P(this,"onSkipPassPhraseClick",async()=>{this.keyBackupInfo=await o.a.get().prepareKeyBackupVersion(),this.setState({copied:!1,downloaded:!1,phase:s.ShowKey})}),P(this,"onPassPhraseNextClick",async e=>{if(e.preventDefault(),this.passphraseField.current){if(await this.passphraseField.current.validate({allowEmpty:!1}),!this.passphraseField.current.state.valid)return this.passphraseField.current.focus(),void this.passphraseField.current.validate({allowEmpty:!1,focused:!0});this.setState({phase:s.PassphraseConfirm})}}),P(this,"onPassPhraseConfirmNextClick",async e=>{e.preventDefault(),this.state.passPhrase===this.state.passPhraseConfirm&&(this.keyBackupInfo=await o.a.get().prepareKeyBackupVersion(this.state.passPhrase),this.setState({copied:!1,downloaded:!1,phase:s.ShowKey}))}),P(this,"onSetAgainClick",()=>{this.setState({passPhrase:"",passPhraseValid:!1,passPhraseConfirm:"",phase:s.Passphrase})}),P(this,"onKeepItSafeBackClick",()=>{this.setState({phase:s.ShowKey})}),P(this,"onPassPhraseValidate",e=>{this.setState({passPhraseValid:e.valid})}),P(this,"onPassPhraseChange",e=>{this.setState({passPhrase:e.target.value})}),P(this,"onPassPhraseConfirmChange",e=>{this.setState({passPhraseConfirm:e.target.value})}),this.state={secureSecretStorage:null,phase:s.Passphrase,passPhrase:"",passPhraseValid:!1,passPhraseConfirm:"",copied:!1,downloaded:!1}}async componentDidMount(){const e=o.a.get(),a=await e.doesServerSupportUnstableFeature("org.matrix.e2e_cross_signing");this.setState({secureSecretStorage:a}),a&&(this.setState({phase:s.BackingUp}),this.createBackup())}renderPhasePassPhrase(){return n.a.createElement("form",{onSubmit:this.onPassPhraseNextClick},n.a.createElement("p",null,Object(l.a)("<b>Warning</b>: You should only set up key backup from a trusted computer.",{},{b:e=>n.a.createElement("b",null,e)})),n.a.createElement("p",null,Object(l.a)("We'll store an encrypted copy of your keys on our server. Secure your backup with a Security Phrase.")),n.a.createElement("p",null,Object(l.a)("For maximum security, this should be different from your account password.")),n.a.createElement("div",{className:"mx_CreateKeyBackupDialog_primaryContainer"},n.a.createElement("div",{className:"mx_CreateKeyBackupDialog_passPhraseContainer"},n.a.createElement(m.a,{className:"mx_CreateKeyBackupDialog_passPhraseInput",onChange:this.onPassPhraseChange,minScore:4,value:this.state.passPhrase,onValidate:this.onPassPhraseValidate,fieldRef:this.passphraseField,autoFocus:!0,label:Object(l.b)("Enter a Security Phrase"),labelEnterPassword:Object(l.b)("Enter a Security Phrase"),labelStrongPassword:Object(l.b)("Great! This Security Phrase looks strong enough."),labelAllowedButUnsafe:Object(l.b)("Great! This Security Phrase looks strong enough.")}))),n.a.createElement(b.a,{primaryButton:Object(l.a)("Next"),onPrimaryButtonClick:this.onPassPhraseNextClick,hasCancel:!1,disabled:!this.state.passPhraseValid}),n.a.createElement("details",null,n.a.createElement("summary",null,Object(l.a)("Advanced")),n.a.createElement(u.a,{kind:"primary",onClick:this.onSkipPassPhraseClick},Object(l.a)("Set up with a Security Key"))))}renderPhasePassPhraseConfirm(){let e,a;this.state.passPhraseConfirm===this.state.passPhrase?(e=Object(l.a)("That matches!"),a=Object(l.a)("Use a different passphrase?")):this.state.passPhrase.startsWith(this.state.passPhraseConfirm)||(e=Object(l.a)("That doesn't match."),a=Object(l.a)("Go back to set it again."));let t=null;return e&&(t=n.a.createElement("div",{className:"mx_CreateKeyBackupDialog_passPhraseMatch"},n.a.createElement("div",null,e),n.a.createElement("div",null,n.a.createElement(u.a,{element:"span",className:"mx_linkButton",onClick:this.onSetAgainClick},a)))),n.a.createElement("form",{onSubmit:this.onPassPhraseConfirmNextClick},n.a.createElement("p",null,Object(l.a)("Enter your Security Phrase a second time to confirm it.")),n.a.createElement("div",{className:"mx_CreateKeyBackupDialog_primaryContainer"},n.a.createElement("div",{className:"mx_CreateKeyBackupDialog_passPhraseContainer"},n.a.createElement("div",null,n.a.createElement("input",{type:"password",onChange:this.onPassPhraseConfirmChange,value:this.state.passPhraseConfirm,className:"mx_CreateKeyBackupDialog_passPhraseInput",placeholder:Object(l.a)("Repeat your Security Phrase..."),autoFocus:!0})),t)),n.a.createElement(b.a,{primaryButton:Object(l.a)("Next"),onPrimaryButtonClick:this.onPassPhraseConfirmNextClick,hasCancel:!1,disabled:this.state.passPhrase!==this.state.passPhraseConfirm}))}renderPhaseShowKey(){return n.a.createElement("div",null,n.a.createElement("p",null,Object(l.a)("Your Security Key is a safety net - you can use it to restore access to your encrypted messages if you forget your Security Phrase.")),n.a.createElement("p",null,Object(l.a)("Keep a copy of it somewhere secure, like a password manager or even a safe.")),n.a.createElement("div",{className:"mx_CreateKeyBackupDialog_primaryContainer"},n.a.createElement("div",{className:"mx_CreateKeyBackupDialog_recoveryKeyHeader"},Object(l.a)("Your Security Key")),n.a.createElement("div",{className:"mx_CreateKeyBackupDialog_recoveryKeyContainer"},n.a.createElement("div",{className:"mx_CreateKeyBackupDialog_recoveryKey"},n.a.createElement("code",{ref:this.recoveryKeyNode},this.keyBackupInfo.recovery_key)),n.a.createElement("div",{className:"mx_CreateKeyBackupDialog_recoveryKeyButtons"},n.a.createElement("button",{className:"mx_Dialog_primary",onClick:this.onCopyClick},Object(l.a)("Copy")),n.a.createElement("button",{className:"mx_Dialog_primary",onClick:this.onDownloadClick},Object(l.a)("Download"))))))}renderPhaseKeepItSafe(){let e;return this.state.copied?e=Object(l.a)("Your Security Key has been <b>copied to your clipboard</b>, paste it to:",{},{b:e=>n.a.createElement("b",null,e)}):this.state.downloaded&&(e=Object(l.a)("Your Security Key is in your <b>Downloads</b> folder.",{},{b:e=>n.a.createElement("b",null,e)})),n.a.createElement("div",null,e,n.a.createElement("ul",null,n.a.createElement("li",null,Object(l.a)("<b>Print it</b> and store it somewhere safe",{},{b:e=>n.a.createElement("b",null,e)})),n.a.createElement("li",null,Object(l.a)("<b>Save it</b> on a USB key or backup drive",{},{b:e=>n.a.createElement("b",null,e)})),n.a.createElement("li",null,Object(l.a)("<b>Copy it</b> to your personal cloud storage",{},{b:e=>n.a.createElement("b",null,e)}))),n.a.createElement(b.a,{primaryButton:Object(l.a)("Continue"),onPrimaryButtonClick:this.createBackup,hasCancel:!1},n.a.createElement("button",{onClick:this.onKeepItSafeBackClick},Object(l.a)("Back"))))}renderBusyPhase(){return n.a.createElement("div",null,n.a.createElement(y.a,null))}renderPhaseDone(){return n.a.createElement("div",null,n.a.createElement("p",null,Object(l.a)("Your keys are being backed up (the first backup could take a few minutes).")),n.a.createElement(b.a,{primaryButton:Object(l.a)("OK"),onPrimaryButtonClick:this.onDone,hasCancel:!1}))}renderPhaseOptOutConfirm(){return n.a.createElement("div",null,Object(l.a)("Without setting up Secure Message Recovery, you won't be able to restore your encrypted message history if you log out or use another session."),n.a.createElement(b.a,{primaryButton:Object(l.a)("Set up Secure Message Recovery"),onPrimaryButtonClick:this.onSetUpClick,hasCancel:!1},n.a.createElement("button",{onClick:this.onCancel},"I understand, continue without")))}titleForPhase(e){switch(e){case s.Passphrase:return Object(l.a)("Secure your backup with a Security Phrase");case s.PassphraseConfirm:return Object(l.a)("Confirm your Security Phrase");case s.OptOutConfirm:return Object(l.a)("Warning!");case s.ShowKey:case s.KeepItSafe:return Object(l.a)("Make a copy of your Security Key");case s.BackingUp:return Object(l.a)("Starting backup...");case s.Done:return Object(l.a)("Success!");default:return Object(l.a)("Create key backup")}}render(){let e;if(this.state.error)e=n.a.createElement("div",null,n.a.createElement("p",null,Object(l.a)("Unable to create key backup")),n.a.createElement("div",{className:"mx_Dialog_buttons"},n.a.createElement(b.a,{primaryButton:Object(l.a)("Retry"),onPrimaryButtonClick:this.createBackup,hasCancel:!0,onCancel:this.onCancel})));else switch(this.state.phase){case s.Passphrase:e=this.renderPhasePassPhrase();break;case s.PassphraseConfirm:e=this.renderPhasePassPhraseConfirm();break;case s.ShowKey:e=this.renderPhaseShowKey();break;case s.KeepItSafe:e=this.renderPhaseKeepItSafe();break;case s.BackingUp:e=this.renderBusyPhase();break;case s.Done:e=this.renderPhaseDone();break;case s.OptOutConfirm:e=this.renderPhaseOptOutConfirm()}return n.a.createElement(d.a,{className:"mx_CreateKeyBackupDialog",onFinished:this.props.onFinished,title:this.titleForPhase(this.state.phase),hasCancel:[s.Passphrase,s.Done].includes(this.state.phase)},n.a.createElement("div",null,e))}}}}]);