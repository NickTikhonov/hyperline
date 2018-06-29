import { exec as ex } from 'child_process'
import React from 'react'
import Component from 'hyper/component'
import SvgIcon from '../utils/svg-icon'

class PluginIcon extends Component {
  render() {
    return (
      <SvgIcon>
          <g>
            <path d="m7.9844 1.0039l5.8086 2.7734 1.4375 6.2344-4.0195 5-6.4492 0.003906-4.0234-5 1.4375-6.2383z" fill="#fff"/>
            <path d="m7.9297 0.32812c-0.14063 0.007813-0.27734 0.042969-0.40234 0.10547l-5.5039 2.6289c-0.28516 0.13281-0.5 0.40234-0.57031 0.70703l-1.3555 5.9062c-0.0625 0.27344-0.011719 0.56641 0.14062 0.80078 0.019531 0.027344 0.039063 0.054688 0.0625 0.082032l3.8086 4.7383c0.19531 0.24219 0.50781 0.39062 0.82031 0.39062h6.1094c0.31641 0 0.625-0.14844 0.82422-0.39062l3.8086-4.7383c0.19531-0.24609 0.27344-0.57812 0.20312-0.88281l-1.3594-5.9062c-0.070313-0.30469-0.28906-0.57422-0.57031-0.71094l-5.5039-2.625c-0.16016-0.078125-0.33594-0.11328-0.51172-0.10547z" fill="#316be5"/>
            <path d="m7.9727 9.8516c0.046875 0 0.09375 0.007813 0.13672 0.027344 0.058594 0.027344 0.10156 0.074219 0.13281 0.125h0.003906l0.83984 1.5156c-0.10938 0.035157-0.22266 0.066407-0.33594 0.09375-0.64062 0.14453-1.2812 0.10156-1.8594-0.097656l0.83594-1.5117h0.003907c0.046875-0.09375 0.14453-0.14844 0.24219-0.15234zm-1.4336-0.69922c0.12891 0.003906 0.24609 0.09375 0.27734 0.22656 0.015625 0.0625 0.007813 0.125-0.015625 0.17969l0.003907 0.007812-0.66016 1.5898c-0.61328-0.39453-1.1055-0.98438-1.3672-1.7109l1.6992-0.28906 0.003907 0.003906c0.019531-0.003906 0.039062-0.007812 0.058593-0.007812zm2.8789-0.003906c0.023437-0.003907 0.046875 0 0.066406 0.003906l0.003906-0.003906 1.7148 0.28906c-0.25 0.70703-0.73047 1.3164-1.3711 1.7266l-0.66797-1.6094 0.003907-0.003907c-0.0625-0.14062 0-0.30859 0.14062-0.375 0.035156-0.015625 0.074218-0.027343 0.10938-0.027343zm-1.6992-1.4102h0.53125l0.32812 0.41016-0.11719 0.51562-0.47656 0.22656-0.47656-0.22656-0.11719-0.51562zm3.168-1.2461c0.19141 0.3125 0.33984 0.66016 0.42578 1.0352s0.10547 0.74609 0.070312 1.1055l-1.6641-0.48047-0.003906-0.007813c-0.14844-0.039062-0.24219-0.19141-0.20703-0.34375 0.015626-0.0625 0.046876-0.11328 0.09375-0.15234v-0.003907zm-5.8125 0l1.293 1.1562-0.003907 0.007812c0.11719 0.10156 0.13672 0.27734 0.039063 0.39844-0.039063 0.050781-0.09375 0.082031-0.15234 0.10156v0.003906l-1.6602 0.47656c-0.082032-0.76953 0.097656-1.5195 0.48438-2.1445zm3.3242-1.5977c0.75 0.09375 1.4414 0.43359 1.9727 0.95312l-1.4062 0.99609h-0.007813c-0.125 0.089844-0.30078 0.066406-0.39844-0.054688-0.039063-0.050781-0.058594-0.10937-0.0625-0.16797zm-0.82422 0l-0.10156 1.7266-0.003906 0.003906c-0.007812 0.15625-0.13672 0.28125-0.29297 0.28125-0.0625 0-0.12109-0.023438-0.16797-0.058594l-0.003906 0.003906-1.418-1.0039c0.4375-0.42969 0.99219-0.74609 1.6367-0.89062 0.11719-0.027343 0.23438-0.046875 0.35156-0.0625zm0.41016-2.5547c-0.17969 0-0.32812 0.16406-0.32812 0.36719v0.007813 0.085937c0.003906 0.11719 0.027344 0.20312 0.042969 0.3125 0.027343 0.23047 0.050781 0.41797 0.039062 0.59766-0.015625 0.066406-0.0625 0.12891-0.10938 0.16797l-0.007812 0.14062c-0.19531 0.015625-0.39453 0.046875-0.59375 0.09375-0.85547 0.19141-1.5938 0.63281-2.1523 1.2266-0.035156-0.023438-0.10156-0.070313-0.12109-0.082032-0.058594 0.007813-0.11719 0.023438-0.19531-0.019531-0.14453-0.10156-0.28125-0.23828-0.44141-0.40234-0.074219-0.078126-0.12891-0.15234-0.21875-0.23047-0.019532-0.015625-0.050782-0.039063-0.074219-0.058594-0.066407-0.054687-0.14844-0.082031-0.22656-0.085937-0.10156-0.003907-0.19922 0.035156-0.26562 0.11719-0.11328 0.14062-0.074219 0.35938 0.082031 0.48438l0.003907 0.003906c0.023437 0.019532 0.050781 0.039063 0.070312 0.054688 0.09375 0.070312 0.17969 0.10547 0.27344 0.16016 0.19531 0.12109 0.35938 0.22266 0.48828 0.34375 0.050781 0.054688 0.058594 0.14844 0.066406 0.19141l0.10547 0.09375c-0.56641 0.85156-0.82422 1.9023-0.67188 2.9727l-0.13672 0.039063c-0.039062 0.046875-0.089843 0.12109-0.14062 0.14062-0.17188 0.054688-0.36328 0.074219-0.59375 0.097656-0.10547 0.011719-0.19922 0.003906-0.31641 0.027344-0.023438 0.003906-0.058594 0.011719-0.085938 0.019531h-0.003906s-0.003906 0.003907-0.003906 0.003907c-0.19531 0.046874-0.32031 0.22266-0.27734 0.39844 0.039063 0.17578 0.22656 0.28516 0.42188 0.24219h0.007813l0.003906-0.003906c0.027344-0.003906 0.0625-0.011718 0.085938-0.019531 0.11328-0.027344 0.19531-0.074219 0.29687-0.11328 0.21875-0.078125 0.39844-0.14062 0.57422-0.16797 0.074219-0.003906 0.15234 0.046875 0.1875 0.066406l0.14453-0.023437c0.33203 1.0234 1.0234 1.8516 1.8984 2.3711l-0.058594 0.14453c0.023438 0.054687 0.046875 0.12891 0.03125 0.1875-0.066406 0.16406-0.17578 0.33984-0.30078 0.53516-0.058594 0.089844-0.12109 0.16016-0.17578 0.26172-0.011719 0.023437-0.03125 0.0625-0.042969 0.089844-0.082031 0.17969-0.023437 0.39062 0.14062 0.46875 0.16406 0.078124 0.36719-0.003907 0.45703-0.1875 0.011719-0.027344 0.027344-0.058594 0.039063-0.085938 0.046875-0.10547 0.0625-0.19922 0.09375-0.30078 0.089844-0.21875 0.13672-0.44922 0.25781-0.58984 0.03125-0.039063 0.085938-0.054687 0.14062-0.070313l0.074219-0.13672c0.76562 0.29297 1.6211 0.37109 2.4766 0.17969 0.19531-0.046875 0.38281-0.10156 0.5625-0.17188 0.023438 0.039063 0.0625 0.10938 0.070313 0.12891 0.058594 0.015626 0.12109 0.027344 0.16797 0.10156 0.089844 0.15234 0.15234 0.33203 0.22656 0.55469 0.035156 0.10156 0.050782 0.19531 0.097656 0.30078 0.011719 0.023437 0.027344 0.058594 0.039063 0.082031 0.089844 0.18359 0.29297 0.26562 0.45703 0.1875 0.16016-0.078125 0.22266-0.28516 0.14062-0.46875-0.015625-0.023437-0.03125-0.0625-0.042969-0.085937-0.054687-0.10547-0.11719-0.17188-0.17969-0.26172-0.12109-0.19531-0.22656-0.35938-0.28906-0.52344-0.027343-0.085937 0.003907-0.14062 0.023438-0.19531-0.011719-0.015625-0.039062-0.09375-0.054688-0.13281 0.91016-0.53906 1.582-1.3984 1.8984-2.3906 0.042969 0.007813 0.11719 0.019531 0.14062 0.027344 0.050781-0.035156 0.097656-0.078125 0.1875-0.070313 0.17578 0.027344 0.35547 0.089844 0.57422 0.16797 0.097656 0.039063 0.17969 0.085938 0.29297 0.11719 0.023438 0.003906 0.058594 0.011719 0.085938 0.015625 0.003906 0 0.003906 0.003906 0.007812 0.003906h0.003907c0.19531 0.042969 0.38281-0.066406 0.42578-0.24219 0.039062-0.17578-0.085938-0.35156-0.28125-0.39844-0.027344-0.007813-0.066406-0.019531-0.09375-0.023437-0.11328-0.023438-0.20703-0.015626-0.31641-0.027344-0.23047-0.023438-0.42188-0.042969-0.58984-0.09375-0.070312-0.027344-0.11719-0.10938-0.14453-0.14453l-0.13281-0.039062c0.070313-0.5 0.050782-1.0195-0.066406-1.5391-0.12109-0.52344-0.33594-1.0039-0.61719-1.4258 0.03125-0.03125 0.097657-0.085937 0.11719-0.10547 0.003906-0.058594 0-0.12109 0.058594-0.1875 0.13281-0.12109 0.29297-0.21875 0.49219-0.34375 0.09375-0.054688 0.17969-0.089844 0.27344-0.16016 0.019531-0.015625 0.050781-0.039062 0.074219-0.054687 0.15625-0.12891 0.19141-0.34375 0.078124-0.48828-0.11328-0.14062-0.33203-0.15625-0.49219-0.027343-0.019531 0.015625-0.050781 0.039062-0.070313 0.058593-0.089843 0.074219-0.14453 0.14844-0.21875 0.23047-0.16406 0.16406-0.29687 0.30078-0.44531 0.39844-0.0625 0.039062-0.15625 0.027343-0.19922 0.023437l-0.125 0.089844c-0.71484-0.75-1.6875-1.2305-2.7344-1.3203-0.003906-0.046876-0.007812-0.125-0.007812-0.14844-0.042969-0.042969-0.09375-0.074219-0.10547-0.16406-0.015625-0.17969 0.007813-0.36719 0.035156-0.59766 0.015625-0.10938 0.042969-0.19531 0.046875-0.3125 0-0.027343-0.003906-0.066406-0.003906-0.09375 0-0.20312-0.14453-0.36719-0.32812-0.36719z" fill="#fff"/>
          </g>
    </SvgIcon>
    )
  }
}

export default class Kubernetes extends Component {
  static displayName() {
    return 'kubernetes'
  }

  constructor(props) {
    super(props)

    this.state = { context: 'Not available' }
    this.setContext = this.setContext.bind(this)
  }

  setContext() {
    exec('/usr/local/bin/kubectl config current-context')
      .then(context => {
        this.setState({ context })
      })
      .catch(() => {
        this.setState({ context: 'Not available' })
      })
  }

  componentDidMount() {
    this.setContext()
    this.interval = setInterval(() => this.setContext(), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className='wrapper'>
        <PluginIcon /> {this.state.context}

        <style jsx>{`
          .wrapper {
            display: flex;
            align-items: center;
            color: #326CE5;
          }
        `}</style>
      </div>
    )
  }
}

function exec(command, options) {
  return new Promise((resolve, reject) => {
    ex(command, options, (err, stdout, stderr) => {
      if (err) {
        reject(`${err}\n${stderr}`)
      } else {
        resolve(stdout)
      }
    })
  })
}
